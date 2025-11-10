import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AudioPlayerProps {
  src: string;
  filename?: string;
  size?: number;
  className?: string;
}

export function AudioPlayer({ src, filename, size, className = '' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [waveform, setWaveform] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const barCount = 35;

useEffect(() => {
  const audio = audioRef.current;
  extractWaveformData(src, barCount)
      .then(data => setWaveform(data))
      .catch(err => console.error("Erro ao gerar waveform:", err));
  if (!audio) return;

  const updateDuration = () => {
    const d = audio.duration;
    
    // 1. Correção para 'Infinity': força o navegador a buscar o fim do stream
    if (d === Infinity) {
      audio.currentTime = 1e101; // Vai para o final teórico
      audio.ontimeupdate = () => {
        audio.ontimeupdate = null;
        setDuration(audio.duration);
        audio.currentTime = 0; // Volta ao início
      };
    } else if (!isNaN(d)) {
      setDuration(d);
    }
  };

  const updateTime = () => setCurrentTime(audio.currentTime);
  const handleEnded = () => setIsPlaying(false);

  // 2. Se o áudio já estiver carregado (cache), pega a duração imediatamente
  if (audio.readyState >= 1) {
    updateDuration();
  }

  audio.addEventListener('timeupdate', updateTime);
  audio.addEventListener('loadedmetadata', updateDuration);
  audio.addEventListener('durationchange', updateDuration); // Importante para arquivos VBR
  audio.addEventListener('ended', handleEnded);

  return () => {
    audio.removeEventListener('timeupdate', updateTime);
    audio.removeEventListener('loadedmetadata', updateDuration);
    audio.removeEventListener('durationchange', updateDuration);
    audio.removeEventListener('ended', handleEnded);
    audio.ontimeupdate = null; // Limpa o hack do Infinity
  };
}, [src]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const downloadAudio = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename || 'audio.mp3';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Gerar barras de áudio simuladas
const extractWaveformData = async (url: string, barCount: number): Promise<number[]> => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  
  const rawData = audioBuffer.getChannelData(0); // Canal 1
  const blockSize = Math.floor(rawData.length / barCount);
  const data = [];

  for (let i = 0; i < barCount; i++) {
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum += Math.abs(rawData[blockSize * i + j]);
    }
    data.push(sum / blockSize);
  }

  // Normalizar valores para escala 0-100
  const multiplier = Math.max(...data);
  return data.map(n => (n / multiplier) * 100);
};

const generateAudioBars = () => {
    return waveform.map((height, i) => {
      const isPlayed = (i / barCount) <= (currentTime / (duration || 1));
      return (
        <div
          key={i}
          className={`flex-1 mx-px rounded-sm transition-all duration-150 ${
            isPlayed ? 'bg-blue-500' : 'bg-neutral-300'
          }`}
          style={{ 
            height: `${Math.max(10, height)}%` // Mínimo de 10% para não sumir
          }}
        />
      );
    });
  };

  return (
    <div className={`audio-player bg-background border rounded-lg p-3 min-w-100 ${className}`}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      <div className="space-y-3">
        {/* Barras de áudio */}
        <div className="flex items-end h-12 px-2">
          {generateAudioBars()}
        </div>

        {/* Controles principais */}
        <div className="flex items-center gap-3">
          {/* Botão Play/Pause */}
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlayPause}
            className="h-10 w-10 rounded-full p-0 flex items-center justify-center"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 ml-0.5" />
            )}
          </Button>

          {/* Informações do áudio */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
            </div>
          </div>

          {/* Botão de download */}
          <Button
            variant="ghost"
            size="sm"
            onClick={downloadAudio}
            className="h-8 w-8 p-0"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
