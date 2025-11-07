import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FaEye, FaCopy } from 'react-icons/fa';

const Home = () => {
  const [secrets, setSecrets] = useState([]);
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [showValue, setShowValue] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const secretsCollection = collection(db, 'users', user.uid, 'secrets');
        const unsubscribeSnapshot = onSnapshot(secretsCollection, (snapshot) => {
          const secretsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSecrets(secretsList);
        });
        return () => unsubscribeSnapshot();
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleAddSecret = async () => {
    if (auth.currentUser && newKey) {
      const secretDoc = doc(db, 'users', auth.currentUser.uid, 'secrets', newKey);
      await setDoc(secretDoc, { value: newValue });
      setNewKey('');
      setNewValue('');
    }
  };

  const handleShowValue = (id) => {
    setShowValue(id);
    setTimeout(() => {
      setShowValue(null);
    }, 2000);
  };

  const handleCopyValue = (value) => {
    navigator.clipboard.writeText(value);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#181818', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#17b8bd', width: '100%' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: '#181818', fontWeight: 'bold' }}>mem08</a>
          <button className="btn" style={{ backgroundColor: '#53565a', color: '#ffffff' }} onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="container mt-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card mb-4" style={{ backgroundColor: '#181818', color: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <div className="card-body">
            <h2 className="card-title" style={{ color: '#17b8bd' }}>Add a New Secret</h2>
            <p className="card-text" style={{ color: '#53565a' }}>Keep your secrets safe and secure.</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: '#181818', color: '#ffffff', border: '1px solid #53565a' }}
                placeholder="Enter Key"
                value={newKey}
                onChange={(e) => setNewKey(e.target.value)}
              />
              <input
                type="password"
                className="form-control"
                style={{ backgroundColor: '#181818', color: '#ffffff', border: '1px solid #53565a' }}
                placeholder="Enter Value"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
              <button className="btn" style={{ backgroundColor: '#17b8bd', color: '#181818' }} onClick={handleAddSecret}>Add</button>
            </div>
          </div>
        </div>

        <ul className="list-group">
          {secrets.map(secret => (
            <li
              key={secret.id}
              className="list-group-item d-flex justify-content-between align-items-center mb-2"
              style={{ backgroundColor: '#181818', color: '#ffffff', borderRadius: '5px', margin: '15px 0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            >
              <span className="text-break" style={{ fontWeight: 'bold', color: '#17b8bd' }}>{secret.id}</span>
              <div className="input-group w-50">
                <input
                  type={showValue === secret.id ? 'text' : 'password'}
                  className="form-control"
                  style={{ backgroundColor: '#181818', color: '#ffffff', border: '1px solid #53565a' }}
                  value={secret.value}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary"
                  style={{ backgroundColor: '#53565a', color: '#ffffff' }}
                  onMouseDown={() => handleShowValue(secret.id)}
                  onMouseUp={() => setShowValue(null)}
                >
                  <FaEye />
                </button>
                <button
                  className="btn btn-outline-secondary"
                  style={{ backgroundColor: '#53565a', color: '#ffffff' }}
                  onClick={() => handleCopyValue(secret.value)}
                >
                  <FaCopy />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;