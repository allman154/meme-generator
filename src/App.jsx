import { useState } from 'react'
import './App.css'
import mordorImage from "./mordor.jpg"

function App() {
  const [meme, setMeme] = useState({
    imageUrl: "https://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  })

  function handleChange(event) {
    const { value, name } = event.currentTarget
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <>
      <main>
        <div className="form-container">
          <div>
            <section>
              <div className="input-row">
                <div className="input-col">
                  <label htmlFor="top-text-input">Top Text</label>
                  <input id="top-text-input"
                         placeholder="One does not simply"
                         onChange={handleChange}
                         value={meme.topText} />
                </div>
                <div className="input-col">
                  <label htmlFor="bottom-text-input">Bottom Text</label>
                  <input id="bottom-text-input"
                         placeholder="walk into Mordor." 
                         onChange={handleChange}
                         value={meme.bottonText}/>
                </div>
              </div>
            </section>
            <section>
              <div className="button-container">
                <button className="generate-button" type="button">Get a new meme image &#128444;&#xFE0F;</button>
              </div>
            </section>
            <section>
              <div className="image-container">
                <div className="meme-wrapper">
                  <img className="meme-image-container" src={meme.imageUrl} />
                  <span className="top">{meme.topText}</span>
                  <span className="bottom">{meme.bottomText}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main >
    </>
  )
}

export default App
