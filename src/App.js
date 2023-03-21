import logo from './logo.svg';
import './App.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css'

function App() {
  return (
    <div className="App text-white">
      <div className='container-fluid'>
        <div className='row bg-black container_0'>
          <div className='col-lg-2 my-auto text-lg-right text-center'>
            <h1>Company Name</h1>
          </div>
          <div className='col-lg-6 d-lg-block d-none'> </div>
          <div className='col-lg-2 my-lg-auto d-lg-block d-none'>
            <img src='Images/App_Store.svg' className='img-fluid' alt='App Store logo' ></img>
          </div>
          <div className='col-lg-2 d-lg-block d-none'>
            <img src='Images/google_Play.svg' className="img-fluid" alt='Google Play logo' ></img>
          </div>
        </div>
        <div className='row container_1 text-center p-4 my-auto title1' >
          <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate__fadeOff' animatePreScroll="animate__fadeIn" initiallyVisible="true" >
            <h1 className='col py-4'>
              Show your skill !
            </h1>
            <h2> Create and share gaming love stories ! </h2>
          </AnimationOnScroll>  
        </div>
        <div className='row container_2'>
          <AnimationOnScroll animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
            <div className='container-fluid'>
              <div className='row title2 m-4 py-4 text-center text-lg-start'>
                <h1>Record</h1>
                <h2>your games effortlessly, on all platforms !</h2>
              </div>
              <div className='row m-4 py-4 text-center'>
                <div className='col-lg-6'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%"  fill="currentColor" className="bi bi-display" viewBox="0 0 16 16">
                            <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Works with all platforms</h3>
                          <h4 className='fw-light py-2'>PC, XBOX, PS4, Switch, mobile</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg"  width="20%" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Works with top games</h3>
                          <h4 className='fw-light py-2'> Fortnite, Call of Duty: Modern Warfar, Apex Legends, PUBG, League of Legends, etc.</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg"  width="20%" fill="currentColor" className="bi bi-broadcast" viewBox="0 0 16 16">
                            <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Highlights detections</h3>
                          <h4 className='fw-light py-2'>Our AI spots the key moments of your gameplay</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg"  width="20%" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
                            <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                            <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>No impact on performance</h3>
                          <h4 className='fw-light py-2'>Light technology, clips deleted locally and uploaded to mobile</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img className='img-fluid  m-lg-4 rounded-4' src='Images/FN_GP.webp' alt="fortnie gameplay recorded"></img>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
          
        </div>
        <div className='row container_3'>
          <AnimationOnScroll animateIn='animate__fadeInLeft' animateOut='animate__fadeOutLeft'>
            <div className='container-fluid'>
              <div className='row title3 text-lg-start text-center m-4 py-4'>
                <h1>Create</h1>
                <h2>Edit your videos, add filter !</h2>
              </div>
              <div className='row m-4 py-4 text-center'>
                <div className='col-lg-6'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Automatic compilations</h3>
                          <h4 className='fw-light py-2'>Choose videos, we create the compilations for you</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-collection" viewBox="0 0 16 16">
                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Trimming</h3>
                          <h4 className='fw-light py-2'> AI detects best moments, user can adapt exact duration</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Add fun</h3>
                          <h4 className='fw-light py-2'>Add visual filter, music, sticker and caption to your recording</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" height="70" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                          </svg>
                        </div>
                        <div className='text-left py-4'>
                          <h3 className='fw-bold py-2'>Show your skills</h3>
                          <h4 className='fw-light py-2'>Highlit your best skills with slow motion</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img className='img-fluid m-lg-4 rounded-4' src='Images/rl.png' alt="rocket league image"></img>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className='row container_4'>
          <AnimationOnScroll animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
            <div className='container-fluid'>
              <div className='row title4 text-center text-lg-start m-4 py-4'>
                <h1>Get Famous</h1>
                <h2>and join our fantastic community</h2>
              </div>
              <div className='row m-4 py-4 text-center'>
                <div className='col-lg-6'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Amazing skills = Amazing exposure</h3>
                          <h4 className='fw-light py-2'>Our AI automatically promotes the best clips</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-trophy" viewBox="0 0 16 16">
                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Participate in weekly challenges</h3>
                          <h4 className='fw-light py-2'> Best clips get highlighted</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Leverage your Powder fame</h3>
                          <h4 className='fw-light py-2'>Receive donation, create opportunites</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Meet fellow musketeers</h3>
                          <h4 className='fw-light py-2'>Meet other gamers, play with them</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img className='img-fluid m-lg-4 rounded-4' src='Images/sm.png'></img>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className='row container_5'>
          <AnimationOnScroll animateIn='animate__fadeInLeft' animateOut='animate__fadeOutLeft'>
            <div className='container-fluid'>
              <div className='row title5 m-4 py-4 text-center text-lg-start'>
                <h1>Share</h1>
                <h2>your clip with the world</h2>
              </div>
              <div className='row m-4 py-4 text-center'>
                <div className='col-lg-6'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                          </svg>
                        </div>
                        <div className='text-lg-start py-4'>
                          <h3 className='fw-bold py-2'>Create your team</h3>
                          <h4 className='fw-light py-2'>Create your team and share your best gaming moments with them</h4>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='icon text-center p-4 rounded-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20%" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                            <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                          </svg>
                        </div>
                        <div className=' py-4'>
                          <h3 className='fw-bold py-2'>Share</h3>
                          <h4 className='fw-light py-2'> Share your best videos on Snap, TikTok, Instagram or Twitter</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img className='img-fluid p-4 ' src='Images/esport.png' alt='esport team'></img>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className='row container_6'>
          <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
            <div className='container-fluid text-center'>
              <div className='row title6 my-4'>
                <h2>Dowload our application</h2>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='container-fluid bg-secondary p-4 rounded-5 my-4 button0'>
                    <div className='row'>
                      <div className='col-lg-6 button_1'>
                        <h3>IOS App</h3>
                        <h4 className='fw-light'>4.8/5 | +22K RATINGS</h4>
                      </div>
                      <div className='col-lg-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30%" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='container-fluid bg-secondary p-4 rounded-5 my-4 button0'>
                    <div className='row'>
                      <div className='col-lg-6 button_1'>
                        <h3 className=''>Android App</h3>
                        <h4 className='fw-light'>NOW AVAILABLE</h4>
                      </div>
                      <div className='col-lg-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30%" fill="currentColor" className="bi bi-android2" viewBox="0 0 16 16">
                          <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='container-fluid windows rounded-5 my-4 button0'>
                    <div className='row'>
                      <div className='button_1'>
                        <h3 className='fs-1 fs-lg-3'>Windows App</h3>
                        <h4 className='fw-lg-normal fw-light'>Windows 10+</h4>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className='row bg-black'>
          <div className='p-4'>
            <hr className='border border-4 rounded-4 border-white m-4'></hr>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-2 text-center text-lg-start p-2'>
                  <h5> Gust vision,inc.<br/> All right reserved 2020</h5>
                </div>
                <div className='col-lg-2 p-2 text-center'>
                  <h5>Terms & conditions - Privacy policy</h5>
                </div>
                <div className='col-lg-2 p-2 text-center'>
                  <h5>Press</h5>
                </div>
                <div className='col-lg-2 p-2 text-center'>
                  <h5>Careers</h5>
                </div>
                <div className='col-lg-2 p-2 text-center'>
                  <h5>Contact</h5>
                </div>
                <div className='col-lg-2'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90%" fill="currentColor" className="bi bi-twitter button0" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </div>
                      <div className='col-3'>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="90%" fill="currentColor" className="bi bi-instagram button0" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </div>
                      <div className='col-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90%" fill="currentColor" className="bi bi-youtube button0" viewBox="0 0 16 16">
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                      </div>
                      <div className='col-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90%" fill="currentColor" className="bi bi-discord button0" viewBox="0 0 16 16">
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
