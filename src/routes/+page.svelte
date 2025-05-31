<script lang="ts">
  import type { PageData } from './$types';
  import { base } from '$app/paths';
  import { getLastModifiedDate } from '$lib/utils/date';

  export let data: PageData;
  const updatedDate = getLastModifiedDate();
</script>

<svelte:head>
  <title>{data.name || ''} - Resume</title>
  <meta name="description" content="Professional resume of {data.name}" />
  <meta name="author" content={data.name} />
</svelte:head>

<div
  class="mx-auto max-w-4xl bg-stone-100 px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-900"
>
  <header class="mb-2">
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <h1 class="text-4xl">{data.name}</h1>
        <h3 class="text-2xl">{data.title}</h3>
        <p>{data.summary}</p>
      </div>
      <div class="ml-4 hidden flex-col items-center md:flex print:flex">
        <p class="mb-2 text-center text-xs text-gray-500 dark:text-gray-500">
          Updated on: {updatedDate}
        </p>
        <img
          src="{base}/icons/qr.png"
          alt="QR Code for digital resume"
          class="h-40 w-40"
        />
        <p class="text-center text-xs text-gray-600 dark:text-gray-400">
          Scan code for updated CV
        </p>
      </div>
    </div>

    <hr class="my-5" />

    <address class="mt-2">
      <dl class="grid grid-cols-2 gap-2 md:grid-cols-3 print:grid-cols-3">
        <div class="flex gap-1">
          <dt class="h-5 w-5">
            <img
              src="{base}/icons/email.svg"
              alt="Email"
              class="h-full w-full brightness-0 dark:brightness-100"
            />
          </dt>
          <dd>
            <a href="mailto:{data.contact.email}">{data.contact.email}</a>
          </dd>
        </div>
        <div class="flex gap-1">
          <dt class="h-5 w-5">
            <img
              src="{base}/icons/mobile.svg"
              alt="Mobile"
              class="h-full w-full brightness-0 dark:brightness-100"
            />
          </dt>
          <dd><a href="tel:{data.contact.phone}">{data.contact.phone}</a></dd>
        </div>
        <div class="flex gap-1">
          <dt class="h-5 w-5">
            <img
              src="{base}/icons/location.svg"
              alt="Location"
              class="h-full w-full brightness-0 dark:brightness-100"
            />
          </dt>
          <dd>{data.contact.location}</dd>
        </div>
        <div class="flex gap-1">
          <dt class="h-5 w-5">
            <img
              src="{base}/icons/linkedin.svg"
              alt="LinkedIn"
              class="h-full w-full brightness-0 dark:brightness-100"
            />
          </dt>
          <dd>
            <a
              href="https://{data.contact.linkedin}"
              target="_blank"
              rel="noopener noreferrer"
            >{data.contact.linkedin}</a
            >
          </dd>
        </div>
        <div class="flex gap-1">
          <dt class="h-5 w-5">
            <img
              src="{base}/icons/github.svg"
              alt="Github"
              class="h-full w-full brightness-0 dark:brightness-100"
            />
          </dt>
          <dd>
            <a
              href="https://{data.contact.github}"
              target="_blank"
              rel="noopener noreferrer"
            >{data.contact.github}</a
            >
          </dd>
        </div>
      </dl>
    </address>
  </header>
  <hr class="my-5" />
  <main>
    <!-- Experience Section -->
    <section class="mb-2">
      <h3 class="mb-4 text-2xl font-semibold uppercase">
        Professional Experience 💼
      </h3>
      {#each data.experience as job}
        <hr class="my-4" />
        <article class="mb-2">
          <header>
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-2xl">
                  <span class="font-semibold">{job.title}</span>
                </h3>
                <p
                  class="text-lg font-semibold text-slate-700 dark:text-gray-300"
                >
                  {job.company}
                </p>
              </div>
              <div class="text-right text-slate-600 dark:text-gray-400">
                <time datetime={job.date}>{job.date}</time>
                <div>{job.location}</div>
              </div>
            </div>
          </header>
          <div class="my-1">
            <p class="text-lg font-semibold">Responsibilities:</p>
            <ul class="space-y-1">
              {#each job.responsibilities as responsibility}
                <li
                  class="relative ml-4 list-none before:absolute before:-left-4 before:text-gray-400 before:content-['-']"
                >
                  {responsibility}
                </li>
              {/each}
            </ul>
          </div>
          <div class="my-1">
            <p class="text-lg font-semibold">Key Projects:</p>
            <ul class="space-y-2">
              {#each job.key_projects as project}
                <li
                  class="relative my-2 ml-4 list-none before:absolute before:-left-4 before:text-gray-400 before:content-['-']"
                >
                  <div class="flex items-start justify-between">
                    <span class="text-lg font-semibold">
                      {project.name}:
                    </span>
                    <span class="ml-2 text-xs text-gray-500">
                      {project.date}
                    </span>
                  </div>
                  <p class="text-justify">
                    {project.description}
                  </p>
                </li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </section>

    <hr class="my-5" />

    <!-- Skills Section -->
    <div>
      <section class="mb-2">
        <h3 class="mb-4 text-2xl font-bold uppercase">Technical Skills 💻</h3>
        <ul class="space-y-1">
          {#each data.technical_skills as category}
            <li>
              <span class="font-semibold">{category.title}:</span>
              {category.items.join(', ')}.
            </li>
          {/each}
        </ul>
      </section>

      <hr class="my-5" />
      <section class="mb-2">
        <h3 class="mb-4 text-2xl font-semibold uppercase">Soft Skills 🤝</h3>
        <ul
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {#each data.soft_skills as skill}
            <li class="ml-6 flex-1 list-disc">{skill}</li>
          {/each}
        </ul>
      </section>
    </div>

    <hr class="my-5" />
    <!-- Education Section -->
    <section class="mb-2">
      <h3 class="mb-4 text-2xl font-semibold uppercase">Education 🎓</h3>
      <article>
        <h4 class="text-xl font-semibold">{data.education.degree}</h4>
        <h5 class="text-lg">{data.education.institution}</h5>
        <p>
          <time datetime={data.education.date}>{data.education.date}</time>
          <span>GPA: {data.education.gpa}</span>
        </p>
      </article>
    </section>

    <hr class="my-5" />
    <!-- Languages Section -->
    <section class="mb-2">
      <h3 class="mb-4 text-2xl font-semibold uppercase">Languages 🌐</h3>
      <dl class="grid gap-4 sm:grid-cols-2">
        {#each Object.entries(data.languages) as [language, proficiency]}
          <div
            class="rounded-lg bg-stone-200 p-4 transition-colors hover:bg-stone-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <dt class="mb-1 text-lg font-medium text-gray-900 dark:text-white">
              {language}
            </dt>
            <dd class="text-sm text-gray-600 dark:text-gray-300">
              {proficiency}
            </dd>
          </div>
        {/each}
      </dl>
    </section>
  </main>
</div>
