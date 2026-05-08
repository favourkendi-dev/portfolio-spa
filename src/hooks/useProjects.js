import { useCallback, useEffect, useMemo, useState } from 'react';
import { getAllProjects, updateProject, deleteProject } from '../services/projectService';
import showcaseProjects from '../data/showcaseProjects';

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      const data = await getAllProjects();

      setProjects(Array.isArray(data) ? data : []);
    } catch (fetchError) {
      setError(fetchError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const mergedProjects = useMemo(() => {
    const projectIds = new Set(projects.map((project) => project.id));
    return [
      ...showcaseProjects,
      ...projects.filter((project) => !projectIds.has(project.id)),
    ];
  }, [projects]);

  const updateProjectById = useCallback(async (id, payload) => {
    try {
      await updateProject(id, payload);
      setProjects((prev) =>
        prev.map((project) =>
          project.id === id ? { ...project, ...payload } : project
        )
      );
    } catch (updateError) {
      setError(updateError.message);
    }
  }, []);

  const deleteProjectById = useCallback(async (id) => {
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (deleteError) {
      setError(deleteError.message);
    }
  }, []);

  return {
    projects: mergedProjects,
    setProjects,
    loading,
    error,
    refetch: fetchProjects,
    updateProject: updateProjectById,
    deleteProject: deleteProjectById,
  };
}

export default useProjects;
