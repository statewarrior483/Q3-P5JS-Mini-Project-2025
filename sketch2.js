function preload() {
  SigmarRegular = loadFont('assets/Sigmar-Regular.ttf');
}

function setup() {
  createCanvas(800, 575);
    // Create a paragraph element and set its position.
  let p = createP('<font size="+2"> psum odor</a> amet, consectetuer adipiscing elit. Phasellus erat habitant hendrerit lacus vivamus congue et. Nec a consectetur diam sagittis ridiculus at ipsum. Nisi facilisi laoreet gravida platea maximus quis. Scelerisque habitasse aliquet ridiculus mauris facilisi semper convallis nec. Cras nisi parturient velit fusce parturient facilisi rhoncus. Libero orci dapibus neque, praesent nullam etiam dictum feugiat. Sem nisi non donec praesent dui sociosqu lacinia. Fames adipiscing congue facilisi viverra lobortis facilisi donec erat erat. Varius consequat ac nullam sollicitudin velit lobortis elementum dapibus. Cubilia aliquet efficitur volutpat class malesuada nisl convallis ut? Tristique augue sodales penatibus cursus iaculis quam.');
  p.position(60, 120);

}

function draw() {
  background(255);
  textFont(SigmarRegular);
  textSize(50);
  fill(0)
  text('Recipient Name', 50, 100);
  
  
}