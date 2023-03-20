export function formatPokeData(data) {
  return {
    experience: data.base_experience,
    height: data.height,
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
    type: data.types[0].type.name,
    stats: data.stats.map((stat) => {
      return {
        name: stat.stat.name.replace("-", " "),
        value: stat.base_stat,
      };
    }),
  };
}

export function formatMoveData(data) {
  return {
    id: data.id,
    name: data.name.replace("-", " "),
    stats: [
      { name: "Accuracy", value: data.accuracy },
      { name: "Power", value: data.power },
      { name: "Power Points", value: data.pp },
    ],
    effect_entries: data.effect_entries,
    learned_by_pokemon:
      data.learned_by_pokemon.length > 10
        ? data.learned_by_pokemon.slice(0, 10)
        : data.learned_by_pokemon,
    type: data.type.name,
  };
}
