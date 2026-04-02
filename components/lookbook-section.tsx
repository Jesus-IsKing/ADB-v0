'use client';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Magnetic } from './ui/magnetic';
import { Download, Share2, ZoomIn, X } from 'lucide-react';

const CATEGORIES = ['All', 'Precision Cuts', 'Master Color', 'Restorative Care'] as const;
type Category = (typeof CATEGORIES)[number];

interface LookbookItem {
    id: number;
    title: string;
    category: Category;
    image: string;
    description: string;
    specs?: string[];
    refId: string;
    size: 'small' | 'medium' | 'large';
    aspectRatio?: 'portrait' | 'landscape' | 'square';
}

const LOOKBOOK_ITEMS: LookbookItem[] = [
    {
        id: 1,
        title: 'Nordic Ice Fusion',
        category: 'Master Color',
        image: '/lookbook-real-1.jpg',
        description: 'Level 10 neutralization with high-precision micro-foiling for seamless silver-ash transition.',
        specs: ['Formula 10.1A', 'Micro-Foil', 'Neutralized'],
        refId: 'REF-2026-01-A',
        size: 'large',
        aspectRatio: 'portrait'
    },
    {
        id: 6,
        title: 'Golden Hour Silk',
        category: 'Master Color',
        image: '/lookbook-real-4.jpg',
        description: '3D Dimensional Balayage with warm honey undertones and mirror-like silk finish.',
        specs: ['3D-Balayage', 'Luminous Silk', 'Toned'],
        refId: 'REF-2026-06-B',
        size: 'medium',
        aspectRatio: 'landscape'
    },
    {
        id: 2,
        title: 'Ivory Dimension',
        category: 'Master Color',
        image: '/lookbook-real-2.jpg',
        description: 'High-impact blonde achieved through meticulous micro-foiling techniques.',
        specs: ['High-Impact', 'Micro-Foil', 'Dimensional'],
        refId: 'REF-2026-02-G',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 3,
        title: 'Classic Precision Bob',
        category: 'Precision Cuts',
        image: '/lookbook-precision.png',
        description: 'A sharp, classic bob with natural texture for a timeless look.',
        specs: ['Precision Cut', 'Natural Texture'],
        refId: 'REF-2026-03-C',
        size: 'small',
        aspectRatio: 'portrait'
    },
    {
        id: 7,
        title: 'Lived-In Soft Ash',
        category: 'Master Color',
        image: '/lookbook-real-5.jpg',
        description: 'Low-maintenance ash tones with a soft, natural transition.',
        specs: ['Root Smudge', 'Ash Tones'],
        refId: 'REF-2026-07-D',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 4,
        title: 'Luminous Brunette',
        category: 'Master Color',
        image: '/lookbook-real-3.jpg',
        description: 'Warm contrast highlights on a rich base with deep hydration.',
        specs: ['Hand Painted', 'Hydrated'],
        refId: 'REF-2026-04-E',
        size: 'medium',
        aspectRatio: 'landscape'
    },
    {
        id: 8,
        title: 'Silky Velvet Balayage',
        category: 'Master Color',
        image: '/lookbook-real-6.jpg',
        description: 'Soft, creamy color with a high-shine finish and velvet texture.',
        specs: ['Soft Color', 'High Shine'],
        refId: 'REF-2026-08-H',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 5,
        title: 'Restorative Care',
        category: 'Restorative Care',
        image: '/lookbook-restoration.png',
        description: 'Intensive treatment for hair health, restoring strength and natural shine.',
        specs: ['Hair Health', 'Strength'],
        refId: 'REF-2026-05-F',
        size: 'small',
        aspectRatio: 'portrait'
    },
];

export const LookbookSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);

    const filteredItems = LOOKBOOK_ITEMS.filter(
        (item) => activeCategory === 'All' || item.category === activeCategory
    );

    return (
        <section id="lookbook" className="w-full py-24 md:py-40 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <Reveal>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 md:mb-24">
                        <div className="max-w-xl space-y-6">
                            <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase text-accent border-l border-accent/30 pl-4 py-1">Gallery of Gratitude</p>
                            <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-8xl font-serif font-medium text-foreground tracking-tight leading-[1.1] md:leading-[0.9]">
                                Devoted <br /><span className="text-accent italic">Artistry</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
                                Each strand is a canvas for excellence, and every transformation is a blessing.
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-2 sm:gap-4 w-full md:w-auto">
                            {CATEGORIES.map((cat) => (
                                <Magnetic key={cat} strength={0.1}>
                                    <button
                                        onClick={() => setActiveCategory(cat)}
                                        className={`flex-1 md:flex-none px-4 sm:px-8 py-3 sm:py-4 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-700 ${activeCategory === cat
                                            ? 'bg-foreground text-background scale-105'
                                            : 'bg-secondary/20 text-muted-foreground hover:bg-accent/10 hover:text-accent border border-border/50'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Gallery Grid - Editorial Masonry */}
                <motion.div
                    className="columns-1 md:columns-2 lg:columns-3 gap-12 lg:gap-16 space-y-12 lg:space-y-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 }}
                                className={`break-inside-avoid relative group overflow-hidden border border-border/20 bg-secondary/5 rounded-sm cursor-zoom-in ${index % 4 === 0 ? 'lg:mt-24' : index % 3 === 0 ? 'lg:mt-12' : ''
                                    }`}
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className="absolute top-6 left-6 z-40">
                                    <span className="text-[10px] font-mono tracking-[0.3em] text-accent/60 uppercase">Artistry №{item.id.toString().padStart(2, '0')}</span>
                                </div>

                                <div className={`relative overflow-hidden ${item.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                                    item.aspectRatio === 'landscape' ? 'aspect-[4/3]' :
                                        'aspect-square'
                                    }`}>
                                    <ParallaxImage
                                        src={item.image}
                                        alt={item.title}
                                        speed={0.04}
                                        className="h-full w-full grayscale-[0.3] group-hover:grayscale-0 transition-[filter] duration-1000"
                                        showWatermark={item.size === 'large'}
                                    />

                                    {/* Shutter Blur Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Expand Indicator */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <ZoomIn className="w-5 h-5 text-white/70" />
                                        </div>
                                    </div>
                                </div>

                                {/* Mastery Specs Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-between p-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                    <div className="flex justify-end gap-2">
                                        {item.specs?.map(spec => (
                                            <span key={spec} className="px-2 py-1 bg-black/60 border border-accent/20 text-accent font-technical text-[8px] tracking-widest uppercase">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <span className="text-accent text-[8px] font-bold tracking-[0.4em] uppercase">{item.category}</span>
                                            <h3 className="text-3xl font-serif font-medium text-white tracking-tight leading-none">{item.title}</h3>
                                        </div>
                                        <p className="text-white/60 text-xs leading-relaxed max-w-xs font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox Dialog */}
                <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
                    <DialogContent className="max-w-6xl w-[95vw] h-[90vh] bg-background/95 backdrop-blur-xl border-accent/20 p-0 overflow-hidden">
                        {selectedItem && (
                            <div className="flex flex-col lg:flex-row h-full">
                                <div className="relative flex-1 bg-black">
                                    <Image
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="lg:w-[400px] p-8 lg:p-12 space-y-8 flex flex-col justify-center border-l border-border/50">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent">{selectedItem.category}</span>
                                            <div className="h-px flex-1 bg-accent/20" />
                                            <span className="text-[10px] font-mono text-muted-foreground/40">{selectedItem.refId}</span>
                                        </div>
                                        <h3 className="text-4xl font-serif font-medium text-foreground tracking-tight">{selectedItem.title}</h3>
                                        <p className="text-muted-foreground font-light leading-relaxed">
                                            {selectedItem.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">Technical Specs</p>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.specs?.map(spec => (
                                                <span key={spec} className="px-4 py-2 bg-secondary/50 border border-border text-[10px] font-medium tracking-wide">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-8 space-y-4">
                                        <button className="w-full py-5 bg-foreground text-background text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all duration-500">
                                            Inquire About This Look
                                        </button>
                                        <div className="flex gap-4">
                                            <button className="flex-1 py-4 border border-border text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-secondary transition-all flex items-center justify-center gap-2">
                                                <Share2 className="w-3 h-3" /> Share
                                            </button>
                                            <button className="flex-1 py-4 border border-border text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-secondary transition-all flex items-center justify-center gap-2">
                                                <Download className="w-3 h-3" /> Save
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-auto text-center">
                                        <p className="text-[10px] italic text-muted-foreground/40 font-serif">"And whatever you do, do it heartily, as to the Lord..."</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>

                {/* Scarcity CTA Bottom */}
                <Reveal delay={0.5}>
                    <div className="mt-20 md:mt-32 p-8 sm:p-12 lg:p-24 bg-secondary/30 border-y border-border/50 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0" />

                        <div className="relative z-10 space-y-8">
                            <h3 className="text-2xl sm:text-4xl md:text-6xl font-serif font-light text-foreground max-w-4xl mx-auto leading-[1.3] md:leading-[1.1] px-4">
                                We serve a limited number of clients to ensure <span className="text-accent italic">exceptional quality</span>. Join our waitlist for the next availability.
                            </h3>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <Magnetic strength={0.2}>
                                    <button className="px-12 py-5 bg-foreground text-background text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-accent transition-colors duration-500">
                                        Join Our Waitlist
                                    </button>
                                </Magnetic>
                                <Magnetic strength={0.1}>
                                    <button className="px-12 py-5 border border-border text-foreground text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-secondary/50 transition-all">
                                        View Service Menu
                                    </button>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

