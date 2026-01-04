import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type Logo = {
  src: string;
  alt: string;
};

const techLogos: Logo[] = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", alt: "PyTorch" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", alt: "NumPy" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "Pandas" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt: "Azure" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg", alt: "Streamlit" },
  { src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", alt: "Hugging Face" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", alt: "Jupyter" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", alt: "FastAPI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", alt: "Matplotlib" },
  { src: "https://cdn.simpleicons.org/scikitlearn/F7931D", alt: "Scikit-learn" },
 
];

function LogoCard({ logo }: { logo: Logo }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl border border-border/30 bg-card hover:bg-accent/20 transition-colors">
      <img
        src={logo.src}
        alt={logo.alt}
        className="size-12 md:size-14 object-contain"
      />
      <span className="text-xs text-muted-foreground font-medium">{logo.alt}</span>
    </div>
  );
}

export function TechnologySection({ className }: { className?: string }) {
  return (
    <section className={cn("py-24 md:py-32 border-t border-border overflow-hidden", className)}>
      <ScrollReveal>
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">
            Technologies
          </h2>
          <p className="text-lg text-muted-foreground font-light tracking-wide mt-4">
            Tools and frameworks I work with
          </p>
        </div>
      </ScrollReveal>

      <InfiniteSlider gap={24} duration={40}>
        {techLogos.map((logo) => (
          <LogoCard key={logo.alt} logo={logo} />
        ))}
      </InfiniteSlider>
    </section>
  );
}
