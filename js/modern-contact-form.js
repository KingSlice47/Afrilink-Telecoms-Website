/* ========================================
   MODERN CONTACT FORM FUNCTIONALITY
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const submitButton = document.querySelector('.btn-modern');
    
    if (!contactForm) return;
    
    // Form validation patterns
    const validationPatterns = {
        name: /^[a-zA-Z\s]{2,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[\+]?[0-9\s\-\(\)]{10,15}$/
    };
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea, .form-select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
        
        input.addEventListener('focus', function() {
            addFocusEffect(this);
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    function validateField(field) {
        const fieldGroup = field.closest('.form-group');
        const fieldName = field.name;
        const fieldValue = field.value.trim();
        
        // Remove existing error states
        clearFieldError(field);
        
        // Required field check
        if (field.hasAttribute('required') && !fieldValue) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        // Pattern validation
        if (fieldValue && validationPatterns[fieldName]) {
            if (!validationPatterns[fieldName].test(fieldValue)) {
                const errorMessages = {
                    name: 'Please enter a valid full name (2-50 characters)',
                    email: 'Please enter a valid email address',
                    phone: 'Please enter a valid phone number'
                };
                showFieldError(field, errorMessages[fieldName]);
                return false;
            }
        }
        
        // Show success state
        showFieldSuccess(field);
        return true;
    }
    
    function validateForm() {
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        const fieldGroup = field.closest('.form-group');
        fieldGroup.classList.remove('success');
        fieldGroup.classList.add('error');
        
        // Remove existing error message
        const existingError = fieldGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        fieldGroup.appendChild(errorDiv);
    }
    
    function showFieldSuccess(field) {
        const fieldGroup = field.closest('.form-group');
        fieldGroup.classList.remove('error');
        fieldGroup.classList.add('success');
        
        // Remove error message if exists
        const errorMessage = fieldGroup.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    function clearFieldError(field) {
        const fieldGroup = field.closest('.form-group');
        fieldGroup.classList.remove('error', 'success');
        
        const errorMessage = fieldGroup.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    function addFocusEffect(field) {
        const fieldGroup = field.closest('.form-group');
        fieldGroup.classList.add('focused');
    }
    
    async function submitForm() {
        // Show loading state
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        // Collect form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Simulate API call (replace with actual endpoint)
            await simulateFormSubmission(data);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            inputs.forEach(input => clearFieldError(input));
            
        } catch (error) {
            // Show error message
            showErrorMessage('Failed to send message. Please try again.');
        } finally {
            // Remove loading state
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    }
    
    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                // For demo purposes, always resolve
                // In real implementation, this would be an actual API call
                console.log('Form data:', data);
                resolve();
            }, 2000);
        });
    }
    
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
        `;
        
        // Add success styles
        const style = document.createElement('style');
        style.textContent = `
            .form-success-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                border-radius: 16px;
                padding: 2rem;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                text-align: center;
                max-width: 400px;
                width: 90%;
                animation: successSlideIn 0.5s ease-out;
            }
            
            .success-content i {
                font-size: 3rem;
                color: var(--color-success-500);
                margin-bottom: 1rem;
            }
            
            .success-content h4 {
                color: var(--color-primary-800);
                margin-bottom: 0.5rem;
                font-size: 1.5rem;
            }
            
            .success-content p {
                color: var(--color-gray-600);
                margin: 0;
            }
            
            @keyframes successSlideIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -60%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(successDiv);
        
        // Remove after 4 seconds
        setTimeout(() => {
            successDiv.style.animation = 'successSlideIn 0.5s ease-out reverse';
            setTimeout(() => {
                document.body.removeChild(successDiv);
                document.head.removeChild(style);
            }, 500);
        }, 4000);
    }
    
    function showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error-message';
        errorDiv.innerHTML = `
            <div class="error-content">
                <i class="fas fa-exclamation-triangle"></i>
                <h4>Oops! Something went wrong</h4>
                <p>${message}</p>
            </div>
        `;
        
        // Add error styles
        const style = document.createElement('style');
        style.textContent = `
            .form-error-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                border-radius: 16px;
                padding: 2rem;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                text-align: center;
                max-width: 400px;
                width: 90%;
                animation: errorSlideIn 0.5s ease-out;
                border-left: 4px solid var(--color-error-500);
            }
            
            .error-content i {
                font-size: 3rem;
                color: var(--color-error-500);
                margin-bottom: 1rem;
            }
            
            .error-content h4 {
                color: var(--color-primary-800);
                margin-bottom: 0.5rem;
                font-size: 1.5rem;
            }
            
            .error-content p {
                color: var(--color-gray-600);
                margin: 0;
            }
            
            @keyframes errorSlideIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -60%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(errorDiv);
        
        // Remove after 5 seconds
        setTimeout(() => {
            errorDiv.style.animation = 'errorSlideIn 0.5s ease-out reverse';
            setTimeout(() => {
                document.body.removeChild(errorDiv);
                document.head.removeChild(style);
            }, 500);
        }, 5000);
    }
    
    // Custom select styling
    const customSelects = document.querySelectorAll('.custom-select');
    customSelects.forEach(select => {
        const selectElement = select.querySelector('.form-select');
        
        selectElement.addEventListener('change', function() {
            if (this.value) {
                select.classList.add('has-value');
            } else {
                select.classList.remove('has-value');
            }
        });
    });
    
    // Form animation on scroll
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    const formElement = document.querySelector('.modern-contact-form');
    if (formElement) {
        formObserver.observe(formElement);
    }
});