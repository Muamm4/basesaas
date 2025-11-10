import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Users,
    Shield,
    Zap,
    CheckCircle,
    Star,
    ArrowRight,
    BarChart,
    Clock,
    Globe,
    Lock,
    Moon,
    Sun,
    Menu,
    X,
    Code2,
    Cloud,
    Headphones,
    Cpu,
    Network,
    Bot,
    Phone,
    Mail,
    MapPin
} from 'lucide-react';
import { useState, useEffect } from 'react';
import AppLogo from '@/components/app-logo';

interface SettingApp {
    name_app: string;
    description: string;
    color: string;
    logo: string;
    favicon: string;
    seo: {
        title?: string;
        description?: string;
        keywords?: string;
    };
}

interface WelcomeProps {
    setting?: SettingApp;
}

export default function Welcome({ setting }: WelcomeProps) {
    const { auth } = usePage<SharedData>().props;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Verificar preferência salva no localStorage
        const savedTheme = localStorage.getItem('theme');

        // Aplicar tema apenas se estiver salvo, não detectar preferência do sistema
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const services = [
        {
            icon: Code2,
            title: "Desenvolvimento de Software",
            description: "Criamos sistemas web, aplicativos e plataformas personalizadas sob medida para as necessidades do seu negócio."
        },
        {
            icon: Cloud,
            title: "Infraestrutura em Nuvem",
            description: "Migração, configuração e gestão de ambientes cloud (AWS, Azure, GCP) com alta disponibilidade e escala."
        },
        {
            icon: Shield,
            title: "Cibersegurança",
            description: "Proteção de dados, análise de vulnerabilidades, conformidade com LGPD e segurança de redes corporativas."
        },
        {
            icon: Headphones,
            title: "Suporte Técnico",
            description: "Atendimento especializado para manutenção preventiva e corretiva, com SLA garantido e monitoramento proativo."
        },
        {
            icon: Bot,
            title: "Automação e IA",
            description: "Automatize processos repetitivos e implemente inteligência artificial para ganhar eficiência e reduzir erros."
        },
        {
            icon: Network,
            title: "Consultoria em TI",
            description: "Diagnóstico tecnológico, planejamento estratégico e implementação das melhores soluções para sua empresa."
        }
    ];

    const benefits = [
        "Equipe especializada e certificada",
        "Atendimento ágil com SLA definido",
        "Soluções sob medida para o seu negócio",
        "Suporte remoto e presencial",
        "Parceria de longo prazo",
        "Preços competitivos e transparentes"
    ];

    const testimonials = [
        {
            name: "Carlos Mendonça",
            role: "Diretor - Construtora Alvorada",
            content: "A equipe implementou nosso ERP integrado em tempo récord. Profissionalismo e qualidade técnica impecáveis.",
            rating: 5
        },
        {
            name: "Fernanda Lima",
            role: "Gerente de TI - Clínica VitaSaúde",
            content: "Migramos toda nossa infraestrutura para a nuvem sem nenhuma interrupção. Suporte excelente em todas as etapas.",
            rating: 5
        },
        {
            name: "Ricardo Souza",
            role: "Sócio - Advocacia Souza & Associados",
            content: "Automatizaram nossos processos internos e hoje economizamos horas de trabalho manual toda semana.",
            rating: 5
        }
    ];

    return (
        <>
            <Head title={setting?.seo?.title ?? `${setting?.name_app} - ${setting?.description ?? 'Plataforma Inteligente de Gestão'}`} />

            {/* Barra Superior Flutuante */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <AppLogo variant="icon" size='10' />
                            </Link>
                        </div>

                        {/* Navegação Desktop */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="#servicos" className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                Serviços
                            </Link>
                            <Link href="#sobre" className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                Sobre
                            </Link>
                            <Link href="#clientes" className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                Clientes
                            </Link>
                            <Link href="#contato" className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                Contato
                            </Link>
                        </nav>

                        {/* Ações e Tema */}
                        <div className="flex items-center space-x-4">
                            {/* Toggle Tema */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                aria-label="Alternar tema"
                            >
                                {isDarkMode ? (
                                    <Sun className="h-5 w-5 text-yellow-500" />
                                ) : (
                                    <Moon className="h-5 w-5 text-neutral-700" />
                                )}
                            </button>

                            {/* Botões Login/Register */}
                            <div className="hidden md:flex items-center space-x-3">
                                {auth.user ? (
                                    <Link href="/dashboard">
                                        <Button variant="outline" size="sm">
                                            Dashboard
                                        </Button>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/login">
                                            <Button variant="outline" size="sm">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link href="#contato">
                                            <Button size="sm">
                                                Fale Conosco
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>

                            {/* Menu Mobile */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                aria-label="Menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                                ) : (
                                    <Menu className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Menu Mobile Dropdown */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-700 py-4">
                            <nav className="flex flex-col space-y-3">
                                <Link
                                    href="#servicos"
                                    className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Serviços
                                </Link>
                                <Link
                                    href="#sobre"
                                    className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sobre
                                </Link>
                                <Link
                                    href="#clientes"
                                    className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Clientes
                                </Link>
                                <Link
                                    href="#contato"
                                    className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contato
                                </Link>

                                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-700 space-y-2">
                                    {auth.user ? (
                                        <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                                            <Button variant="outline" size="sm" className="w-full dark:text-white">
                                                Dashboard
                                            </Button>
                                        </Link>
                                    ) : (
                                        <>
                                            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                                <Button variant="outline" size="sm" className="w-full dark:text-white">
                                                    Login
                                                </Button>
                                            </Link>
                                            <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                                                <Button size="sm" className="w-full dark:text-white">
                                                    Fale Conosco
                                                </Button>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 dark:opacity-15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 dark:opacity-15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900 dark:opacity-15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                        <Zap className="h-4 w-4" />
                        � Soluções de TI para impulsionar seu negócio
                    </div>

                    {/* Main Title */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {setting?.name_app}
                            </span>
                            <br />
                            <span className="text-3xl md:text-5xl text-neutral-900 dark:text-white">
                                Soluções em Tecnologia
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                            {setting?.seo?.description ?? 'Desenvolvimento de software, infraestrutura em nuvem, cibersegurança e suporte especializado para empresas que querem crescer com tecnologia.'}
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {auth.user ? (
                            <Link href="/dashboard">
                                <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:text-white">
                                    Acessar Dashboard
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        ) : (
                            <>
                                <Link href="#contato">
                                    <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:text-white">
                                        Solicitar Orçamento
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="#servicos">
                                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-neutral-300 dark:border-neutral-600 dark:text-white">
                                        Ver Serviços
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>+50 projetos entregues</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Suporte 24/7</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>SLA garantido</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Equipe certificada</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicos" className="py-20 px-4 bg-white dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <Badge className="mb-4">Serviços</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">O que fazemos por você</h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                            Soluções tecnológicas completas para empresas de todos os portes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-neutral-50 dark:bg-neutral-800">
                                <CardContent className="p-8">
                                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                                        <service.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">{service.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* About / Benefits Section */}
            <section id="sobre" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <Badge className="bg-white/20 text-white border-white/30">Por que nos escolher</Badge>
                            <h2 className="text-4xl font-bold text-white">
                                Tecnologia que impulsiona resultados reais
                            </h2>
                            <p className="text-xl text-white/90 leading-relaxed">
                                {setting?.name_app} oferece soluções tecnológicas personalizadas que transformam a operação e a competição de cada cliente
                            </p>

                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="h-6 w-6 text-white shrink-0" />
                                        <span className="text-white text-lg">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">+50</div>
                                    <div className="text-white/80">Projetos entregues</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">+30</div>
                                    <div className="text-white/80">Clientes ativos</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                                    <div className="text-white/80">Suporte disponível</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                                    <div className="text-white/80">Satisfação garantida</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="clientes" className="py-20 px-4 bg-neutral-50 dark:bg-neutral-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <Badge>Depoimentos</Badge>
                        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">O que nossos clientes dizem</h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                            Empresas que confiaram na nossa tecnologia e colheram resultados
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white dark:bg-neutral-900">
                                <CardContent className="p-8">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-neutral-700 dark:text-neutral-300 mb-6 italic">"{testimonial.content}"</p>
                                    <div>
                                        <div className="font-semibold text-neutral-900 dark:text-white">{testimonial.name}</div>
                                        <div className="text-neutral-600 dark:text-neutral-400 text-sm">{testimonial.role}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact / CTA Section */}
            <section id="contato" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold text-white">
                        Pronto para transformar sua empresa com tecnologia?
                    </h2>
                    <p className="text-xl text-white/90">
                        Fale com nossa equipe e receba um diagnóstico tecnológico gratuito.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {auth.user ? (
                            <Link href="/dashboard">
                                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg border-2 border-white bg-white text-blue-600 dark:text-blue-600 dark:bg-transparent dark:border-blue-600 hover:bg-transparent hover:text-white">
                                    Acessar Plataforma
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        ) : (
                            <>
                                <a href="mailto:contato@empresa.com.br">
                                    <Button size="lg" variant="secondary" className="px-8 py-4 text-lg border-2 border-white bg-white text-blue-600 hover:bg-transparent hover:text-white">
                                        Enviar E-mail
                                        <Mail className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="px-8 py-4 text-lg border-2 border-white bg-white text-blue-600 hover:bg-transparent hover:text-white">
                                        WhatsApp
                                        <Phone className="ml-2 h-5 w-5" />
                                    </Button>
                                </a>
                            </>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>Resposta em até 1 dia útil</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            <span>Diagnóstico gratuito</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            <span>Atendimento em todo o Brasil</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">{setting?.name_app}</h3>
                        <p className="text-neutral-400">
                            {setting?.description ?? 'Soluções em tecnologia para impulsionar o seu negócio.'}
                        </p>
                        <div className="mt-4 space-y-2 text-neutral-400 text-sm">
                            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@empresa.com.br</div>
                            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> (00) 00000-0000</div>
                            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Brasil</div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Serviços</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li>Desenvolvimento de Software</li>
                            <li>Infraestrutura em Nuvem</li>
                            <li>Cibersegurança</li>
                            <li>Suporte Técnico</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li>Sobre nós</li>
                            <li>Preços</li>
                            <li>Contato</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li>Termos de Uso</li>
                            <li>Privacidade</li>
                            <li>Segurança</li>
                            <li>SLA</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
                    <p>&copy; {new Date().getFullYear()} {setting?.name_app}. Todos os direitos reservados.</p>
                </div>
            </footer>

            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </>
    );
}