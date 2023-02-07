import { useState, useEffect } from 'react'

import './switch.css'

const Switch = () => {
  const [theme, setTheme] = useState('light')

  const handleChange = (e) => {
    setTheme(e.target.checked?'dark':'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className='switch__container'>
      <input type="checkbox" className="checkbox" id="checkbox" onChange={handleChange} />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon"></i>
        <i className='fas fa-sun'></i>
        <div className='ball' />
      </label>
      {`Set ${theme==='dark'?'Light':'Dark'} Mode`}
    </div>
  )
}

export default Switch