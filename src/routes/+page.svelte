<script>
    import { onMount } from 'svelte';
    import { toast } from 'svoast';
    import AOS from 'aos';

    import Title from '$lib/component/Title.svelte';

    // const globalSearchModalEl = document.querySelector("#global-search");
    // const globalSearchModal =
    //   globalSearchModalEl && new bootstrap.Modal(globalSearchModalEl, {});

    let dataLoading = true;
    let showcaseTab = 0;
    let behance = [];
    let dribbble = [];
    let youtube = [];

    // globalSearch: {
    //   query: "",
    //   queryModal: "",
    //   toggle: false,
    //   loading: false,
    //   backend: "https://api.mf-chan.com/search",
    //   searchTime: 0,
    //   searchResult: [],
    //   loadData: async function () {
    //     searchResult = [];

    //     try {
    //       if (queryModal) {
    //         loading = true;
    //         const response = await fetch(
    //           `${backend}?q=${queryModal}`
    //         );

    //         searchTime = response.data.data.searchTime;
    //         searchResult = response.data.data.searchResult;
    //       }
    //     } catch (e) {
    //       console.error(e);
    //     }

    //     loading = false;
    //   },
    //   open: async function () {
    //     try {
    //       if (query) {
    //         queryModal = query;
    //         query = "";

    //         globalSearchModal.show();
    //         await loadData();
    //       }
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   },
    // }

    onMount(async () => {
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND);
            const { data } = await response.json();

            behance = data.behance;
            dribbble = data.dribbble;
            youtube = data.youtube;
            dataLoading = false;
        } catch (e) {
            console.error(e);
            toast.error(
                'Cannot fetch data from the backend, please try again later.',
            );
        }
    });
</script>

<Title />

<main class="flex-1 mx-12 my-6">
    <h1>Welcome to SvelteKit</h1>
    <p>
        Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read
        the documentation
    </p>
</main>
