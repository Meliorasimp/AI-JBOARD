import type { FC } from "react";
import '../index.css'
import { useNavigate } from "react-router-dom";

const Intropage:FC = () => {

    const nav = useNavigate();
    
    const handlejobSeekerClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();
      nav('/jobseeker');
    }
    const handleEmployerClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();
      nav('/employer');
    }

  return (
    <div className="h-screen flex items-center justify-center intropage-background-color">
      <div className="flex flex-col h-5/6 w-5/6 justify-center items-center gap-4">
        <h1 className="intropage-text-color text-5xl tracking-wider underline">Smart Job Finder</h1>
        <h2 className="intropage-text-color text-3xl tracking-wide mb-10">Just to start, are you here as a job seeker or an employer?</h2>
        <button className="text-black intropage-button-bg-color text-2xl px-20 py-5 mb-2 rounded-lg font-bold hover:cursor-pointer hover:scale-105 transition-transform" onClick={handlejobSeekerClick}>Job-seeker</button>
        <button className="text-black intropage-button-bg-color text-2xl px-20 py-5 mb-2 rounded-lg font-bold hover:cursor-pointer hover:scale-105 transition-transform" onClick={handleEmployerClick}>Employer</button>
      </div>
    </div>
  )
}

export default Intropage
