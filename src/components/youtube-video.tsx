import { createSignal, Show } from "solid-js"
import { Icon } from "./icon"

type Props = {
  id: string
  title: string
}

export function YoutubeVideo(props: Props) {
  const embedUrl: string = `https://www.youtube.com/embed/${ props.id }?rel=0&showinfo=0&autoplay=1`

  const [ showIframe, setShowIframe ] = createSignal(false)

  const onClickVideoContainer = () => {
    setShowIframe(true)
  }

  return <div class="w-full aspect-video relative cursor-pointer group" onClick={onClickVideoContainer}>
    <Show when={!showIframe()}>
      <picture>
        <source srcset={`https://i.ytimg.com/vi_webp/${ props.id }/maxresdefault.webp`} type="image/webp" />
        <img src={`https://i.ytimg.com/vi/${ props.id }/maxresdefault.jpg`} alt={ props.title } />
      </picture>

      <button class="absolute w-[100px] lg:w-[10%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Запустить видео">
        <svg viewBox="0 0 256 180">
          <path class="fill-black/80 group-hover:fill-[red]" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" />
          <path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
        </svg>
      </button>
    </Show>

    <Show when={showIframe()}>
      <iframe
        class="w-full aspect-video"
        src={ embedUrl }
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Show>
  </div>
}

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/z_rQ4iS52EY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
