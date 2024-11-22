import { useEffect, useState } from "react";
import getdata from "../../services/poetry";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

interface Poem {
  id: number;
  title: string;
  author: string;
  lines: string[];
}

const Dashboard = () => {

  const navigate = useNavigate()

  const [poems, setPoems] = useState<Poem[]>([]);

  useEffect (() => {
   
    getdata().then((data) => {
      setPoems(data);
      console.log(data);
      
    });
    
  }, []);

  const onViewPoem = (id:any) => {
    navigate(`/Detail/${id}`)

  
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>

      <button onClick={() => navigate('/Form')}> Add Poem </button>
      <div className="poem-list">
        {poems.map((poem, id) => (
          <div key={id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.lines[0]}...</p>
            <button className="poem-button" onClick={() => onViewPoem(id)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
