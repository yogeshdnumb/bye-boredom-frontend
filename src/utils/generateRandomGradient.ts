export default function generateRandomGradient(name: string) {
  // console.log(name);

  // Simple hash function to generate a numeric value from the name
  function simpleHash(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  const colors = [
    "grey",
    "grape",
    "blue",
    "green",
    "orange",
    "red",
    "violet",
    "cyan",
    "lime",
    "pink",
    "teal",
    "yellow",
  ];

  const gradients = [];

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      if (i !== j) {
        gradients.push({ from: colors[i], to: colors[j], deg: 90 });
      }
    }
  }

  return gradients[simpleHash(name)];
}

// console.log(generateRandomGradient("u"));
