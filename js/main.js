(() => {
  //console.log("IIFE Fired");
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [ {
      title: "Noise-cancelling microphones",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience."
    },
    {
      title: "Comfortable fit",
      text: "Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place."
    },
    {
      title:"360 AUDIO",
      text: "360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience."
    },
    {
      title:"Ultra Fast Charging",
      text: "Charge your earbuds in 30 minutes or less with our hyper charging technology."
    }
  ]

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo () {
    
    infoBoxes.forEach((infoBox, index) => {

      let selected = document.querySelector(`#hotspot-${index+1}`);
      // console.log(selected);

      const titleE = document.createElement("h2");
      const textE = document.createElement("p");
      
      titleE.textContent = infoBox.title;
      textE.textContent = infoBox.text;

      selected.appendChild(titleE);
      selected.appendChild(textE);

      // document.createElement('h2');
        //textContent = infoBox.title

      // document.createElement('p');
        //textContent = infoBox.title


      // console.log(infoBox.title);
      // console.log(infoBox.text);

      //selected.appendChild();
      //selected.appendChild();
  })


  }

  loadInfo();

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.