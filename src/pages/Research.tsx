import { useState } from 'react';

export default function Research() {
  const [activeMethod, setActiveMethod] = useState<number | null>(null);

  const methods = [
    "TIRF microscopy",
    "Confocal microscopy",
    "Multi-photon imaging",
    "Single molecule microscopy/PALM superresolution",
    "Image analysis",
    "Plate reader with fluidics (fluorescence, luminescence)",
    "Patch clamp electrophysiology",
    "Molecular biology - plasmid DNA and adenoviral constructions",
    "Cell culture - primary culture and cell lines"
  ];

  return (
    <div>
      <a href="/">← Back to Home</a>

      <div>
        <h1>Research</h1>
        <p>NRG Laboratory</p>
      </div>

      <div>
        <h2>Our Focus Areas</h2>
        <div>
          <p>
            <strong>Type-2-diabetes</strong> is characterized by high-blood sugar levels. Understanding and developing treatment strategies have been focused on blood sugar lowering hormone insulin. Apart from there are other factors that influence islet environment which are crucial for islet functioning and secretion of islet hormones. Islet cells bring about their biological actions at different time scales. Therefore the challenge is to investigate both short-duration and long-duration events within single cells. Advancements in microscopy techniques have made this possible to understand variable spatiotemporal scales in cell biology to navigate complex and heterogenic environments in an islet.
          </p>
          
          <p>
            The focus areas of this lab to work on the areas that impact <strong>islet-environment and cell survival</strong> using primarily high-resolution imaging techniques combined with basic cell biology and molecular biology techniques. This will allow us to develop approaches to preserve islet functioning and survival during diabetes.
          </p>
        </div>
      </div>

      <div>
        <h2>Methods Used to Address the Research Questions</h2>
        <div>
          {methods.map((method, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveMethod(index)}
              onMouseLeave={() => setActiveMethod(null)}
            >
              <p>{method}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}