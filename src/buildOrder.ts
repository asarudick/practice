export default function buildOrder(projects: string[], dependencies: any[]) {
  if (!projects.length) return [];

  const result: string[] = [];
  const adjacencyList = new Map<string, Set<string>>();

  // Set up a map of projects.
  for (const project of projects) {
    adjacencyList.set(project, new Set<string>());
  }

  // Add dependencies to the map.
  for (const [dependency, project] of dependencies) {
    const set = adjacencyList.get(project);
    set?.add(dependency);
  }

  // Can build any project that doesn't have dependencies.
  while (adjacencyList.size) {
    let built = false;
    for (const [k, v] of adjacencyList.entries()) {
      // Skip those with dependencies.
      if (v.size) continue;

      built = true;
      // Found a project that can be built.
      result.push(k);
      adjacencyList.delete(k);

      // Remove current project from dependencies.
      for (const v of adjacencyList.values()) {
        v.delete(k);
      }
    }
    if (!built) throw new Error('Unable to build. Unmet dependencies.');
  }

  return result;
}
