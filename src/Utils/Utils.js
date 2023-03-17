export function formatJson(data) {
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
