import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QwikLottie } from "qwik-lottie";

export default component$(() => {
  const defaultOptions = {
    path: "https://assets7.lottiefiles.com/packages/lf20_M6jA5UNDHa.json",
  };
  return (
    <>
      <h1 class="text-3xl font-bold underline text-center">
        Welcome to Qwik Design
      </h1>
      <QwikLottie options={defaultOptions} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Docs Starter",
};
