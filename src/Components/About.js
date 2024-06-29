

export default function About(props) {
    const bg=()=>{
        if(props.mode==="red"){
            return "#a81414"
        }else if(props.mode==="yellow"){
            return "#f5b402"
        }else if(props.mode==="dark"){
            return "#000000"
        }else if(props.mode==="blue"){
            return "#080a4a"
        }else if(props.mode==="green"){
            return  "#0cc242"
        }else{
            return "#fcfcfc"
        }
      }
  return (
    <div class={`accordion accordion-flush text-${props.mode==="light"?"dark":"light"}`} style={{backgroundColor: bg()}} id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        About This
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">This is my first React app inspired from code with harry <code>to learn code</code></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        About Textutils
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">This is Text utils use to do some cool things with your text</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        About Me
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">I am Harsh from DTU loving to devlop Websites</div>
    </div>
  </div>
</div>
  )
}