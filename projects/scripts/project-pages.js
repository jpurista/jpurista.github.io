const router = {
        init: () => {
            window.addEventListener('popstate', router.handleRoute);
            router.handleRoute();
        },
        handleRoute: () => {
            const urlParams = new URLSearchParams(window.location.search);
            const projectId = urlParams.get('project');
            router.loadProject(projectId);
        },
        loadProject: (projectId) => {
            const mdBlock = document.getElementById('md-content');
            mdBlock.setAttribute('src', `/projects/md/${projectId}.md`);
            document.title = `${projectId.replace('-', ' ')} - Projects`;
            },
        navigateTo: (projectId, sectionId = '') => {
            const url = sectionId 
                ? `?project=${projectId}#${sectionId}`
                : `?project=${projectId}`;
            history.pushState(null, '', url);
            router.handleRoute();
        }
    };
    document.addEventListener('DOMContentLoaded', router.init);
    