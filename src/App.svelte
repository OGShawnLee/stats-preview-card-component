<script>
  import { imageHeaderDesktop, imageHeaderMobile } from './assets';
</script>

<main class="my-24">
  <div
    class="max-w-xs md:max-w-xl lg:(grid grid-cols-2 max-w-5xl) | bg-blue-800 rounded-lg shadow-lg overflow-hidden">
    <picture class="block order-2 bg-violet">
      <source src={imageHeaderDesktop} media="(min-width: 640px)" sizes="540x466" />
      <source src={imageHeaderMobile} media="(max-width: 640px)" />
      <img
        class="opacity-70 mix-blend-multiply"
        src={imageHeaderDesktop}
        alt="team working in an office"
        width="540"
        height="466" />
    </picture>
    <div class="order-1 p-8 | flex flex-col gap-4 | text-center lg:(p-12 justify-center text-left)">
      <h1 class="text-2xl md:text-3xl font-bold text-white">
        Get
        <b class="text-violet"> insights </b>
        that help your business grow.
      </h1>
      <p>
        Discover the benefits of data analytics and make better decisions regarding revenue,
        customer experience, and overall efficiency.
      </p>
      <section class="mt-6" id="stats" aria-labelledby="stats-label">
        <label class="sr-only" for="stats" id="stats-label"> Stats </label>
        <ul class="inline-flex flex-col md:(flex-row gap-12) gap-4 children:(flex flex-col gap-1)">
          <li>
            <b class="text-2xl text-white"> 10K+ </b>
            <span class="text-xs font-lexand text-white/60 uppercase tracking-widest">
              companies
            </span>
          </li>
          <li>
            <b class="text-2xl text-white"> 314 </b>
            <span class="text-xs font-lexand text-white/60 uppercase tracking-widest">
              templates
            </span>
          </li>
          <li>
            <b class="text-2xl text-white"> 12M+ </b>
            <span class="text-xs font-lexand text-white/60 uppercase tracking-widest">
              queries
            </span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</main>

<style>
  :global(html) {
    font-size: 15px;
  }
</style>
