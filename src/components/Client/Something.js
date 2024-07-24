import React, { useState } from 'react';
import '../../Assets/css/Something.css';
import logoImage from '../../Assets/Images/logo.png';
import backgroundImage from '../../Assets/manif-soutien-palestine-scaled.jpg'; // Assurez-vous d'avoir une image de fond à cet emplacement

const SomethingMissing = () => {
  const [selectedOption, setSelectedOption] = useState('Boycott');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    proofURL: '',
    reason: '',
    alternativeOf: ''
  });
  const [urlError, setUrlError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateURL(formData.proofURL)) {
      setIsSubmitted(true);
      setUrlError('');
    } else {
      setUrlError('Please enter a valid URL.');
    }
  };

  const validateURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="something" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="something-missing-form">
        <img src={logoImage} alt="Logo" className="logo" />
        <h2>Is something missing?</h2>
        <p className="info-message">Please provide accurate and truthful information. Your contributions help us support a just cause.</p>

        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="Boycott"
              checked={selectedOption === 'Boycott'}
              onChange={() => setSelectedOption('Boycott')}
            />
            Boycott
          </label>
          <label>
            <input
              type="radio"
              value="Alternative"
              checked={selectedOption === 'Alternative'}
              onChange={() => setSelectedOption('Alternative')}
            />
            Alternative
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="brandName">Brand Name:</label>
            <input
              type="text"
              id="brandName"
              placeholder="Coca Cola"
              value={formData.brandName}
              onChange={handleInputChange}
              required
            />
          </div>

          {selectedOption === 'Boycott' && (
            <>
              <div className="form-group">
                <label htmlFor="proofURL">Proof URL:</label>
                <input
                  type="text"
                  id="proofURL"
                  placeholder="http://example.com"
                  value={formData.proofURL}
                  onChange={handleInputChange}
                  required
                />
                {urlError && <div className="error-message">{urlError}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="reason">Reason:</label>
                <textarea
                  id="reason"
                  placeholder="This brand supports Zionism because..."
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </>
          )}

          {selectedOption === 'Alternative' && (
            <>
              <div className="form-group">
                <label htmlFor="alternativeOf">Alternative of:</label>
                <input
                  type="text"
                  id="alternativeOf"
                  placeholder="Brand A"
                  value={formData.alternativeOf}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="proofURL">Proof URL:</label>
                <input
                  type="text"
                  id="proofURL"
                  placeholder="http://example.com"
                  value={formData.proofURL}
                  onChange={handleInputChange}
                  required
                />
                {urlError && <div className="error-message">{urlError}</div>}
              </div>
            </>
          )}

          <div className="form-buttons">
            <button className="send-button" type="submit">Send</button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank you!</h2>
            <p>Your submission is valuable and helps in the cause. Together, we can make a difference.</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SomethingMissing;