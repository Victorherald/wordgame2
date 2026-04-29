import '../animations/tileAnimations.css'
import { LetterBoard } from '../components/GameBoard'



export function FridgeSVG({
  charge = 3,
  maxCharge = 3,
  hp = 100,
  fridgeMaxHp = 300,
  overheating = false
} : {
  charge?: number,
  maxCharge?: number,
  hp?: number,
  fridgeMaxHp?: number,
  overheating?: boolean,
}) {
  const percent = (charge / maxCharge) * 100;

  


  const spinDuration = Math.max(2.5 - charge * 0.5 , 0.4)

  return (
    <div className="">
      
      {/* outer body */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        
        <defs>
          <linearGradient id="fridgeMetal" x1="0" x2="1">
          <stop offset= "0%" stopColor="#2b2f36"/>
          <stop offset= "50%" stopColor="#1a1d22"/>
          <stop offset= "100%" stopColor="#3a404a"/>
          </linearGradient>

          <radialGradient id="heatGlow">
           <stop offset="0%" stopColor="rgba(255,120,0,0,9)"/>
           <stop offset="100%" stopColor="rgba(255,120,0,0)"/>
          </radialGradient>
        </defs>
        
         {/* Outer body */}
        <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="12"
        fill="url(#fridgeMetal)"
        stroke="#0b0c0e"
        strokeWidth="2"   
        />

          {/*Inner engine core */}
          <circle 
             cx="50"
             cy="50"
             r="25"
             fill="add8e6"
             stroke="#add8e6"
             strokeWidth="1.5"
         

          />

          {/*spinnning blades */}
          <g> 
           <animateTransform
           attributeName="transform"
           
           
           type="rotate"
           from ={`0 50 50`}
           to ={`360 50 50`}
           dur={`${spinDuration}s`}
           repeatCount="indefinite"
           />
            <path d="M50 28 C54 32, 54 40, 50 45 C46 40, 46 32, 50 28 Z" fill="#add8e6"/>
            <path d="M72 50 C68 54, 60 54, 55 50 C60 46, 68 46, 72 50 Z" fill="#add8e6"/>
            <path d="M50 72 C46 68, 46 60, 50 55 C54 60, 54 68, 50 72 Z" fill="#add8e6"/>
            <path d="M28 50 C32 46, 40 46, 45 50 C40 54, 32 54, 28 50 Z" fill="#add8e6"/>
          </g>

          {/*inner heat glow */}
          <circle cx="50" cy="50" r="6" fill="url(#heatGlow)"/>

          {/*Charge ring*/}
          <circle 
          cx="50"
          cy="50"
          r="27"
          fill="none"
          stroke="#34eB5e"
          strokeWidth="8"
          strokeDasharray={`${charge * 40} 999`}
          className="transition-all duration-300"/>
     
       
         {/* overheating glow */}
      {overheating && (
         <circle 
         cx="50"
         cy="50"
         r="24"
        
         fill="#ff4500"
         className="animate"
         />
      )}


           {/* HP */}
      <text
        x="72"
        y="90"
        fontSize="26"
        fill="lightblue"
        fontWeight="bold">
        x{hp}
      </text>
      </svg>

   

     
    </div>
  );
}