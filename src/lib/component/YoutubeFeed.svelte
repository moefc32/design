<script>
    export let youtube;
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<div class="flex flex-1 flex-col gap-6 px-12 pt-[125px] pb-12 bg-black/75">
    <div class="flex flex-col lg:flex-row gap-6 w-full">
        <a
            href={youtube[0]?.url}
            target="_blank"
            class="block w-full lg:w-2/3 overflow-hidden"
            title={youtube[0]?.name}
        >
            <div
                class="!bg-cover aspect-video rounded-sm"
                style="background: url({youtube[0]
                    ?.image}) center center no-repeat;"
            ></div>
            <div
                class="card flex-row items-center gap-2 mx-6 -mt-8 px-5 bg-white text-xl h-[60px]"
            >
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[28px] h-[28px]"
                    fill="#ff0000"
                    ><path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    /></svg
                >
                <span class="truncate">{youtube[0]?.name}</span>
            </div>
        </a>
        <div class="hidden lg:flex flex-1 flex-col justify-between gap-4">
            {#each youtube as item, i}
                {#if i > 0}
                    <div class="flex flex-1 gap-3 w-full" title={item.name}>
                        <a
                            href={item.url}
                            target="_blank"
                            class="block !bg-cover aspect-video rounded-sm"
                            style="background: url({item.image}) center center no-repeat;"
                        ></a>
                        <a
                            href={item.url}
                            target="_blank"
                            class="block flex-1 text-white xl:text-lg line-clamp-3 h-[4.5em] overflow-hidden"
                        >
                            {item.name}
                        </a>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>
