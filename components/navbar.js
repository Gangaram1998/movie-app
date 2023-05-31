function navbar(){
    return `
    <div id="left">
      <div>
        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg">
      </div>
      <div>
        TV
      </div>
      <div>Movies</div>
      <div>Sports</div>
      <div>Disney+</div>
      <div>KIDS</div>
    </div>
    <div id="right">
      <div>
        <input placeholder="Search">
      </div>
      <div id="lead">
        <img src="data:image/png;base64,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">
      </div>
      <div>
        <button>SUBSCRIBE</button>
      </div>
      <div>
     LOGIN
      </div>
    </div>
   `
}


export default navbar