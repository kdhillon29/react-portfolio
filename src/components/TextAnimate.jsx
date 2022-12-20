import ReactTyped from "react-typed";

const TextAnimate=()=>{
    return (
        <div className="font-bold  md:text-3xl text-2xl  ">
            <ReactTyped
                strings={['Front-End Developer']}
                typeSpeed={40}
            />
            <br/>

            <ReactTyped
            strings={[
                'JavaScript,TypeScript',
                'ReactJs,Hooks,Redux',
                'UX/UI Design,Figma',
                'Tailwind,BootStrap,CSS,HTML',
                
                
                
                  ]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop >
                <input className="border-slate-300 bg-slate-100 w-5/6 p-1 mt-2 " type="text"/>
            
            </ReactTyped>
        </div>
    );
}

export default TextAnimate