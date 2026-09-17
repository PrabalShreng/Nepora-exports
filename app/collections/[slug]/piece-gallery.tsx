'use client';

import Image from 'next/image';
import { useRef, useState, type PointerEvent } from 'react';

type Props = { images: string[]; name: string };

export function PieceGallery({ images, name }: Props) {
  const [active, setActive] = useState(0);
  const lens = useRef<HTMLSpanElement>(null);
  const zoomImage = useRef<HTMLSpanElement>(null);
  const selectionImage = useRef<HTMLSpanElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [zooming, setZooming] = useState(false);
  const current = images[active];

  function moveZoom(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'touch' && event.buttons === 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (!lens.current || !zoomImage.current || !selectionImage.current || !panel.current || !rect.width || !rect.height) return;
    const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
    panel.current.style.height = `${rect.height}px`;
    // The selection and preview show exactly the same crop at different scales.
    const width = panel.current.clientWidth;
    const height = panel.current.clientHeight || width * 7 / 5;
    const scale = Math.max(3, width / rect.width, height / rect.height);
    const selectionWidth = width / scale;
    const selectionHeight = height / scale;
    const left = Math.max(0, Math.min(rect.width - selectionWidth, x - selectionWidth / 2));
    const top = Math.max(0, Math.min(rect.height - selectionHeight, y - selectionHeight / 2));
    lens.current.style.width = `${selectionWidth}px`;
    lens.current.style.height = `${selectionHeight}px`;
    lens.current.style.left = `${left}px`;
    lens.current.style.top = `${top}px`;
    selectionImage.current.style.width = `${rect.width}px`;
    selectionImage.current.style.height = `${rect.height}px`;
    selectionImage.current.style.left = `${-left}px`;
    selectionImage.current.style.top = `${-top}px`;
    zoomImage.current.style.width = `${rect.width * scale}px`;
    zoomImage.current.style.height = `${rect.height * scale}px`;
    zoomImage.current.style.left = `${-left * scale}px`;
    zoomImage.current.style.top = `${-top * scale}px`;
    setZooming(true);
  }

  return <div className="piece-gallery" data-zooming={zooming}>
    <div className="piece-thumbnails" aria-label={`${name} images`}>
      {images.map((src, index) => <button key={`${src}-${index}`} type="button" aria-label={`View image ${index + 1} of ${name}`} aria-pressed={active === index} onClick={() => { setActive(index); setZooming(false); }}><Image src={src} alt="" fill sizes="90px" className="object-cover" /></button>)}
    </div>
    <div className="piece-main-image image-frame" data-zooming={zooming} onPointerEnter={moveZoom} onPointerMove={moveZoom} onPointerDown={moveZoom} onPointerUp={event => { if (event.pointerType === 'touch') setZooming(false); }} onPointerLeave={() => setZooming(false)} onPointerCancel={() => setZooming(false)}>
      <Image src={current} alt={`${name}, view ${active + 1}`} fill priority={active === 0} sizes="(max-width: 760px) 100vw, 45vw" className="object-cover" />
      <span ref={lens} className="piece-zoom-highlight" aria-hidden="true"><span ref={selectionImage} className="piece-zoom-image"><Image src={current} alt="" fill loading="eager" sizes="(max-width: 760px) 100vw, 45vw" className="object-cover" /></span></span>
    </div>
    <div ref={panel} className="piece-zoom-panel" aria-hidden="true"><span ref={zoomImage} className="piece-zoom-image"><Image src={current} alt="" fill loading="eager" sizes="(max-width: 760px) 300vw, 135vw" className="object-cover" /></span></div>
  </div>;
}
