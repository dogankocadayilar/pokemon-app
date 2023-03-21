export function formatPokeData(data) {
  return {
    experience: data.base_experience,
    height: data.height,
    id: data.id,
    name: data.name,
    official_image: data.sprites.other["official-artwork"].front_default,
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
    effect: data.effect_entries[0].effect.replace("$effect_chance%", ""),
    learned_by_pokemon:
      data.learned_by_pokemon.length > 10
        ? data.learned_by_pokemon.slice(0, 5)
        : data.learned_by_pokemon,
    type: data.type.name,
  };
}

export function formatItemData(data) {
  return {
    id: data.id,
    name: data.name.replace("-", " "),
    stats: [
      { name: "Cost", value: data.cost },
      { name: "Fling Power", value: data.fling_power },
    ],
    effect: data.effect_entries[0].effect.replace("$effect_chance%", ""),
    image: data.sprites.default,
  };
}
