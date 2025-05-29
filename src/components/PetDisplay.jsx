function PetDisplay({ hunger, energy, happiness }) {
  let image = 'pet-assets/panda-normal.png';
  let moodMessage = "I'm feeling okay!";

  if (hunger < 30) {
    image = 'pet-assets/panda-hungry.png';
    moodMessage = "I'm starving 😩";
  } else if (energy < 30) {
    image = 'pet-assets/panda-sleepy.png';
    moodMessage = "So sleepy... 😴";
  } else if (happiness < 30) {
    image = 'pet-assets/panda-sad.png';
    moodMessage = "I feel sad 😢";
  } else if (hunger > 80 && energy > 80 && happiness > 80) {
    image = 'pet-assets/panda-happy.png';
    moodMessage = "I'm super happy! 🥳";
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt="Virtual Pet"
        style={{
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          marginBottom: '0rem',
        }}
      />


      <p className="text-base italic text-gray-700">{moodMessage}</p>
    </div>
  );
}


export default PetDisplay;
