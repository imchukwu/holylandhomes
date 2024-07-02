import React from "react";
import "./Team.css";
import image_1 from "../../assets/pic-1.png";
import image_2 from "../../assets/pic-1.png"; // Replace with your second image

const Team = () => {
  const teamData = [
    {
      name: "Michika Bappah I. Esq.",
      image: image_1,
      title: "Principal Partner",
    },
    {
      name: "Nuruddeen Abubakar Esq.",
      image: image_2,
      title: "Head of Chamber",
    },
  ];

  return (
    <div className="team">
      {teamData.slice(0, 2).map((member) => (
        <div key={member.name} className="team-member">
          <img
            src={member.image}
            alt={`${member.name} - Team Member`}
            className="team-member-img"
          />
          <div className="team-member-info">
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
