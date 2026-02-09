document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    
    // Auto-detect browser language with Portuguese fallback
    const getInitialLang = () => {
        const saved = localStorage.getItem('preferred-lang');
        if (saved) return saved;
        
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('en')) return 'en';
        return 'pt'; // Default fallback
    };

    let currentLang = getInitialLang();

    // Embedded Translations
    const translations = {
        "en": {
            "nav_home": "Home",
            "nav_about": "About",
            "nav_projects": "Projects",
            "nav_contact": "Contact",
            "hero_title": "Mateus Silva",
            "hero_subtitle": "Senior Mobile Engineer | Flutter Specialist",
            "hero_description": "Architecting high-performance, scalable mobile experiences with Flutter, Kotlin, and Swift.",
            "about_title": "About Me",
            "about_text": "Senior Mobile Engineer specialized in Flutter with a deep foundation in native iOS and Android development. I have a proven track record of delivering high-performance applications across various industries, including solid experience in the international financial market. I master reactive programming and Clean Architecture to build robust, scalable products that solve complex business challenges with technical excellence.",
            "about_edu": "Graduated in Computer Science from UFS.",
            "skills_title": "Core Expertise",
            "projects_title": "Strategic Projects",
            
            "project_ai_title": "AI Financial Assistant",
            "project_ai_desc": "Hybrid intelligence security assistant for SMS/Email analysis. Features an offline-first strategy to ensure user privacy, utilizing local processing before cloud fallback.",
            "project_ai_tech": "Clean Architecture | Riverpod | MethodChannels (Swift/Kotlin) | Offline-First",
            
            "project_watch_title": "Movie Catalog (TMDB)",
            "project_watch_desc": "High-performance theater/streaming catalog. Developed following strict quality standards to ensure a decoupled and maintainable codebase.",
            "project_watch_tech": "Clean Architecture | MobX | TDD (Unit Tests) | TMDB API | Flutter 3.10+",
            
            "project_store_title": "Fake Store E-commerce",
            "project_store_desc": "Full e-commerce implementation demonstrating UI/UX patterns and reactive state management without heavy dependencies.",
            "project_store_tech": "Clean Architecture | ValueNotifier | State Pattern | REST API Integration",
            
            "project_recipes_title": "Smart Recipes App",
            "project_recipes_desc": "Interactive recipes platform with real-time sync and robust dependency injection for scalability.",
            "project_recipes_tech": "MVC Pattern | MobX | Flutter Modular (DI & Routing) | Firebase (Realtime & Cloud Storage)",
            
            "contact_title": "Let's Build Something Great",
            "contact_text": "Available for strategic technical discussions, high-impact collaborations, or new professional challenges.",
            "view_project": "Technical Deep Dive",

            "p_arch_label": "Architecture",
            "p_state_label": "State Management",
            "p_patterns_label": "Core Patterns",
            "p_overview_label": "Project Overview",
            "p_tech_label": "Technical Deep Dive",
            "p_code_label": "Implementation Strategy",
            "p_back": "Back to Home",
            "p_view_code": "View Source Code",

            "projects_details": {
                "ai": {
                    "title": "AI Financial Assistant",
                    "subtitle": "Mission-critical security assistant for financial data protection.",
                    "arch": "Clean Architecture (Domain/Data/Presentation)",
                    "state": "Riverpod (Asynchronous Data Handling)",
                    "patterns": "MVVM, Repository, DTOs, SOLID, MethodChannels",
                    "github": "https://github.com/mateuss-silva/ai_assistant",
                    "description": "A sophisticated security tool designed to protect users in the financial sector by analyzing SMS and Email patterns for fraud using hybrid intelligence. The main challenge was balancing high-performance analysis with ironclad user privacy.",
                    "tech_details": "Implemented an 'Offline-First' strategy where primary analysis happens locally on the device. Utilized MethodChannels to bridge Flutter with high-performance native modules: Kotlin with Coroutines for Android and Swift with Combine for iOS. This architecture ensures low latency and maximum reliability in critical scenarios.",
                    "code_snippet": "/// Notifier for managing analysis state (using Riverpod)\nclass AnalysisNotifier extends StateNotifier<AnalysisState> {\n  final Ref _ref;\n  AnalysisNotifier(this._ref) : super(const AnalysisInitial());\n\n  Future<void> analyze(String message) async {\n    state = const AnalysisLoading();\n    final useCase = _ref.read(analyzeMessageUseCaseProvider);\n    final result = await useCase.execute(message);\n\n    state = result.fold(\n      (failure) => AnalysisError(failure),\n      (analysis) => AnalysisSuccess(analysis),\n    );\n  }\n}",
                    "images": [
                        "https://raw.githubusercontent.com/mateuss-silva/ai_assistant/master/screenshots/Screenshot_idle.png",
                        "https://raw.githubusercontent.com/mateuss-silva/ai_assistant/master/screenshots/Screenshot_load.png",
                        "https://raw.githubusercontent.com/mateuss-silva/ai_assistant/master/screenshots/Screenshot_result.png"
                    ]
                },
                "movies": {
                    "title": "Movie Catalog (TMDB)",
                    "subtitle": "Decoupled cinematic experience with high test coverage.",
                    "arch": "Clean Architecture (Uncle Bob) + TDD",
                    "state": "MobX (Observable Patterns)",
                    "patterns": "TDD, Datasource/Repository, Modular DI",
                    "github": "https://github.com/mateuss-silva/o-que-assistir",
                    "description": "A high-performance movie catalog powered by the TMDB API. The project's focus was not just on features, but on building a rock-solid, test-driven application that can scale indefinitely with minimal technical debt.",
                    "tech_details": "Developed using a strict TDD approach, reaching 92% test coverage on core features. Architecture follows Reso Coder's Clean Arch approach, strictly decoupling the UI from data sources. This allows for easy swapping of APIs or databases without touching business logic. Utilizes MobX for reactive, predictable state transitions.",
                    "code_snippet": "/// UseCase implementation for fetching movies (Clean Arch + TDD)\nclass GetMoviesUsecase implements Usecase<List<MovieEntity>, GetMoviesParams> {\n  final MovieRepository repository;\n  GetMoviesUsecase(this.repository);\n\n  @override\n  Future<Either<Failure, List<MovieEntity>>> call(GetMoviesParams params) {\n    return repository.getMovies(category: params.category);\n  }\n}",
                    "images": [
                        "https://raw.githubusercontent.com/mateuss-silva/o-que-assistir/main/assets/images/home-1.png",
                        "https://raw.githubusercontent.com/mateuss-silva/o-que-assistir/main/assets/images/home-2.png",
                        "https://raw.githubusercontent.com/mateuss-silva/o-que-assistir/main/assets/images/movie-details.png",
                        "https://raw.githubusercontent.com/mateuss-silva/o-que-assistir/main/assets/images/search.png"
                    ]
                },
                "store": {
                    "title": "Fake Store E-commerce",
                    "subtitle": "Modern retail experience with optimized state patterns.",
                    "arch": "Clean Architecture (Simplified)",
                    "state": "ValueNotifier + StatePattern",
                    "patterns": "Repository, Interface Abstraction, Modular DI",
                    "github": "https://github.com/mateuss-silva/fake-store",
                    "description": "An e-commerce demonstration app focused on smooth UI/UX and efficient state notifications. It aims to show how a complex store can be managed with minimal external dependencies.",
                    "tech_details": "Uses the State Pattern internally to handle loading, success, and error states without the boilerplate of heavy frameworks. This approach keeps the application lightweight and promotes deep understanding of Flutter's reactive core. Modular DI ensures all services are lazily loaded and easily testable.",
                    "code_snippet": "/// Controller using ValueNotifier and StatePattern\nclass ProductsStore extends ValueNotifier<ProductsState> {\n  final GetProductsUsecase _getProductsUsecase;\n  final FilterProductsUsecase _filterProductsUsecase;\n\n  Future<void> getProducts() async {\n    _updateProductsState(ProductsLoadingState());\n    _updateLoadedProducts(await _getProductsUsecase(NoParams()));\n  }\n\n  void _updateLoadedProducts(result) {\n    result.fold(\n      (failure) => _updateProductsState(ProductsErrorState(failure.message)),\n      (products) => _updateProductsState(ProductsLoadedState(products, products)),\n    );\n  }\n}",
                    "images": [
                        "https://raw.githubusercontent.com/mateuss-silva/fake-store/main/assets/images/prints/products.png",
                        "https://raw.githubusercontent.com/mateuss-silva/fake-store/main/assets/images/prints/list-with-favorites.png",
                        "https://raw.githubusercontent.com/mateuss-silva/fake-store/main/assets/images/prints/details.png",
                        "https://raw.githubusercontent.com/mateuss-silva/fake-store/main/assets/images/prints/favorites.png"
                    ]
                },
                "recipes": {
                    "title": "Smart Recipes App",
                    "subtitle": "Full-stack mobile solution with Firebase integration.",
                    "arch": "MVC + SOLID Principles",
                    "state": "MobX (Reactive Observables)",
                    "patterns": "Dependency Injection, Firebase Realtime/Storage, Modular",
                    "github": "https://github.com/mateuss-silva/catalogo-receitas",
                    "description": "A complete recipe management system with real-time synchronization and cloud asset management. Focused on scalability and clean code using SOLID principles.",
                    "tech_details": "Implemented using MVC for clear separation of concerns. Firebase Realtime Database handles live data syncing, while Cloud Storage manages high-resolution culinary imagery. Flutter Modular handles both dependency injection and complex routing, ensuring the app remains maintainable as features grow.",
                    "code_snippet": "/// product repository using Firebase Realtime Database\nclass ProductRepository implements IProductRepository {\n  final _database = FirebaseDatabase.instance.ref();\n\n  @override\n  Stream<List<Product>> getProducts() {\n    var productsReference = _database.child('products');\n    return productsReference.onValue.map((event) {\n      List<Product> products = [];\n      (event.snapshot.value as Map).forEach((id, productMap) {\n        products.add(Product.fromJson(id, productMap));\n      });\n      return products;\n    });\n  }\n}",
                    "images": [
                        "https://raw.githubusercontent.com/mateuss-silva/gerenciamento-mobx/main/assets/images/home.png",
                        "https://raw.githubusercontent.com/mateuss-silva/gerenciamento-mobx/main/assets/images/details.png",
                        "https://raw.githubusercontent.com/mateuss-silva/gerenciamento-mobx/main/assets/images/edit.png"
                    ]
                }
            }
        },
        "pt": {
            "nav_home": "Início",
            "nav_about": "Sobre",
            "nav_projects": "Projetos",
            "nav_contact": "Contato",
            "hero_title": "Mateus Silva",
            "hero_subtitle": "Engenheiro Mobile Sênior | Especialista Flutter",
            "hero_description": "Arquitetando experiências mobile de alta performance e escala com Flutter, Kotlin e Swift.",
            "about_title": "Sobre Mim",
            "about_text": "Engenheiro Mobile Sênior especialista em Flutter com sólida experiência em desenvolvimento nativo iOS e Android. Possuo uma trajetória consolidada na entrega de aplicações de alta performance em diversos setores, incluindo sólida experiência no mercado financeiro internacional. Domino programação reativa e Clean Architecture para construir produtos robustos e escaláveis, focando sempre na excelência técnica e na resolução de desafios de negócio complexos.",
            "about_edu": "Graduado em Ciência da Computação pela UFS.",
            "skills_title": "Especialidades Core",
            "projects_title": "Projetos Estratégicos",
            
            "project_ai_title": "Assistente Financeiro IA",
            "project_ai_desc": "Assistente de segurança com inteligência híbrida para análise de SMS/Emails. Estratégia offline-first para privacidade total, processando dados localmente.",
            "project_ai_tech": "Clean Architecture | Riverpod | MethodChannels (Swift/Kotlin) | Offline-First",
            
            "project_watch_title": "Catálogo de Filmes (TMDB)",
            "project_watch_desc": "Catálogo de alta performance para cinema e streaming. Desenvolvido sob rigorosos padrões de qualidade para um código desacoplado.",
            "project_watch_tech": "Clean Architecture | MobX | TDD (Testes Unitários) | TMDB API | Flutter 3.10+",
            
            "project_store_title": "E-commerce Fake Store",
            "project_store_desc": "Implementação completa de e-commerce focada em padrões de UI/UX e gerenciamento de estado reativo otimizado.",
            "project_store_tech": "Clean Architecture | ValueNotifier | State Pattern | Integração API REST",
            
            "project_recipes_title": "Catálogo de Receitas",
            "project_recipes_desc": "Plataforma interativa de receitas com sincronização em tempo real e injeção de dependências robusta para escalabilidade.",
            "project_recipes_tech": "MVC Pattern | MobX | Flutter Modular (DI & Routing) | Firebase (Database & Storage)",
            
            "contact_title": "Vamos Construir Algo Incrível?",
            "contact_text": "Disponível para discussões técnicas estratégicas, colaborações de alto impacto ou novos desafios profissionais.",
            "view_project": "Detalhes Técnicos",

            "p_arch_label": "Arquitetura",
            "p_state_label": "Gerenciamento de Estado",
            "p_patterns_label": "Padrões Core",
            "p_overview_label": "Resumo do Projeto",
            "p_tech_label": "Deep Dive Técnico",
            "p_code_label": "Estratégia de Implementação",
            "p_back": "Voltar para Início",
            "p_view_code": "Ver Código Fonte",

            "projects_details": {
                "ai": {
                    "title": "Assistente Financeiro IA",
                    "subtitle": "Assistente de segurança de missão crítica para proteção de dados financeiros.",
                    "arch": "Clean Architecture (Domain/Data/Presentation)",
                    "state": "Riverpod (Asynchronous Data Handling)",
                    "patterns": "MVVM, Repository, DTOs, SOLID, MethodChannels",
                    "github": "https://github.com/mateuss-silva/ai_assistant",
                    "description": "Uma ferramenta de segurança sofisticada projetada para proteger usuários no setor financeiro, analisando padrões de SMS e E-mail em busca de fraudes usando inteligência híbrida. O principal desafio foi equilibrar a análise de alta performance com a privacidade total do usuário.",
                    "tech_details": "Implementada uma estratégia 'Offline-First' onde a análise primária ocorre localmente no dispositivo. Utilizei MethodChannels para conectar o Flutter a módulos nativos de alta performance: Kotlin com Coroutines no Android e Swift com Combine no iOS. Esta arquitetura garante baixa latência e máxima confiabilidade em cenários críticos.",
                    "code_snippet": "// Monitorando o estado da análise com Riverpod\nclass AnalysisNotifier extends StateNotifier<AnalysisState> {\n  final Ref _ref;\n  AnalysisNotifier(this._ref) : super(const AnalysisInitial());\n\n  /// Analisa uma mensagem para detectar fraude\n  Future<void> analyze(String message) async {\n    state = const AnalysisLoading();\n    final useCase = _ref.read(analyzeMessageUseCaseProvider);\n    final result = await useCase.execute(message);\n\n    state = result.fold(\n      (failure) => AnalysisError(failure),\n      (analysis) => AnalysisSuccess(analysis),\n    );\n  }\n}",
                    "images": [
                        "https://raw.githubusercontent.com/mateuss-silva/ai_assistant/master/screenshots/Screenshot_idle.png",
                        "https://raw.githubusercontent.com/mateuss-silva/ai_assistant/master/screenshots/Screenshot_load.png",
                        "https://raw.githubusercontent.com/mateuss-silva/ai_assistant/master/screenshots/Screenshot_result.png"
                    ]
                },
                "movies": {
                    "title": "Catálogo de Filmes (TMDB)",
                    "subtitle": "Experiência cinematográfica desacoplada com alta cobertura de testes.",
                    "arch": "Clean Architecture (Uncle Bob) + TDD",
                    "state": "MobX (Observable Patterns)",
                    "patterns": "TDD, Datasource/Repository, Modular DI",
                    "github": "https://github.com/mateuss-silva/o-que-assistir",
                    "description": "Um catálogo de filmes de alta performance alimentado pela API TMDB. O foco do projeto não foi apenas funcionalidades, mas a construção de uma aplicação robusta guiada por testes, capaz de escalar indefinidamente com dívida técnica mínima.",
                    "tech_details": "Desenvolvido com uma abordagem rigorosa de TDD, atingindo 92% de cobertura de testes nas funcionalidades core. A arquitetura segue a abordagem Clean Arch do Reso Coder, desacoplando estritamente a UI das fontes de dados. Isso permite a troca fácil de APIs ou bancos de dados sem tocar na lógica de negócio. Utiliza MobX para transições de estado reativas e previsíveis.",
                    "code_snippet": "/// Implementação de UseCase para buscar filmes (Clean Arch + TDD)\nclass GetMoviesUsecase implements Usecase<List<MovieEntity>, GetMoviesParams> {\n  final MovieRepository repository;\n  GetMoviesUsecase(this.repository);\n\n  @override\n  Future<Either<Failure, List<MovieEntity>>> call(GetMoviesParams params) {\n    return repository.getMovies(category: params.category);\n  }\n}",
                    "images": [
                        "https://raw.githubusercontent.com/mateuss-silva/o-que-assistir/main/assets/images/home-1.png",
                        "https://raw.githubusercontent.com/mateuss-silva/o-que-assistir/main/assets/images/home-2.png",
                        "https://raw.githubusercontent.com/mateuss-silva/o-que-assistir/main/assets/images/movie-details.png",
                        "https://raw.githubusercontent.com/mateuss-silva/o-que-assistir/main/assets/images/search.png"
                    ]
                },
                "store": {
                    "title": "E-commerce Fake Store",
                    "subtitle": "Experiência de varejo moderna com padrões de estado otimizados.",
                    "arch": "Clean Architecture (Simplified)",
                    "state": "ValueNotifier + StatePattern",
                    "patterns": "Repository, Interface Abstraction, Modular DI",
                    "github": "https://github.com/mateuss-silva/fake-store",
                    "description": "Um app de demonstração de e-commerce focado em UI/UX fluida e notificações de estado eficientes. O objetivo é mostrar como uma loja complexa pode ser gerenciada com o mínimo de dependências externas.",
                    "tech_details": "Utiliza o State Pattern internamente para gerenciar estados de carregamento, sucesso e erro sem o boilerplate de frameworks pesados. Esta abordagem mantém a aplicação leve e promove um entendimento profundo do núcleo reativo do Flutter. Modular DI garante que todos os serviços sejam carregados sob demanda e sejam facilmente testáveis.",
                    "code_snippet": "/// Controller usando ValueNotifier e StatePattern\nclass ProductsStore extends ValueNotifier<ProductsState> {\n  final GetProductsUsecase _getProductsUsecase;\n  final FilterProductsUsecase _filterProductsUsecase;\n\n  Future<void> getProducts() async {\n    _updateProductsState(ProductsLoadingState());\n    _updateLoadedProducts(await _getProductsUsecase(NoParams()));\n  }\n\n  void _updateLoadedProducts(result) {\n    result.fold(\n      (failure) => _updateProductsState(ProductsErrorState(failure.message)),\n      (products) => _updateProductsState(ProductsLoadedState(products, products)),\n    );\n  }\n}",
                    "images": [
                        "https://raw.githubusercontent.com/mateuss-silva/fake-store/main/assets/images/prints/products.png",
                        "https://raw.githubusercontent.com/mateuss-silva/fake-store/main/assets/images/prints/list-with-favorites.png",
                        "https://raw.githubusercontent.com/mateuss-silva/fake-store/main/assets/images/prints/details.png",
                        "https://raw.githubusercontent.com/mateuss-silva/fake-store/main/assets/images/prints/favorites.png"
                    ]
                },
                "recipes": {
                    "title": "Catálogo de Receitas",
                    "subtitle": "Solução mobile full-stack com integração Firebase.",
                    "arch": "MVC + Princípios SOLID",
                    "state": "MobX (Reactive Observables)",
                    "patterns": "Injeção de Dependência, Firebase Realtime/Storage, Modular",
                    "github": "https://github.com/mateuss-silva/catalogo-receitas",
                    "description": "Um sistema completo de gerenciamento de receitas com sincronização em tempo real e gerenciamento de arquivos na nuvem. Focado em escalabilidade e código limpo usando princípios SOLID.",
                    "tech_details": "Implementado usando MVC para uma clara separação de responsabilidades. O Firebase Realtime Database lida com a sincronização de dados ao vivo, enquanto o Cloud Storage gerencia imagens culinárias de alta resolução. O Flutter Modular gerencia tanto a injeção de dependência quanto o roteamento complexo, garantindo que o app permaneça sustentável à medida que as funcionalidades crescem.",
                    "code_snippet": "/// Repositório de produtos consumindo Firebase Realtime Database\nclass ProductRepository implements IProductRepository {\n  final _database = FirebaseDatabase.instance.ref();\n\n  @override\n  Stream<List<Product>> getProducts() {\n    var productsReference = _database.child('products');\n    return productsReference.onValue.map((event) {\n      List<Product> products = [];\n      (event.snapshot.value as Map).forEach((id, productMap) {\n        products.add(Product.fromJson(id, productMap));\n      });\n      return products;\n    });\n  }\n}",
                    "images": [
                        "https://raw.githubusercontent.com/mateuss-silva/gerenciamento-mobx/main/assets/images/home.png",
                        "https://raw.githubusercontent.com/mateuss-silva/gerenciamento-mobx/main/assets/images/details.png",
                        "https://raw.githubusercontent.com/mateuss-silva/gerenciamento-mobx/main/assets/images/edit.png"
                    ]
                }
            }
        }
    };

    // Shared Initialization Logic
    window.initProjectPage = (projectId) => {
        const project = translations[currentLang].projects_details[projectId];
        if (!project) return;

        // Populate details
        document.getElementById('p-title').textContent = project.title;
        document.getElementById('p-subtitle').textContent = project.subtitle;
        document.getElementById('p-architecture').textContent = project.arch;
        document.getElementById('p-state').textContent = project.state;
        document.getElementById('p-patterns').textContent = project.patterns;
        document.getElementById('p-description').textContent = project.description;
        document.getElementById('p-technical-details').textContent = project.tech_details;
        document.getElementById('p-code').textContent = project.code_snippet;
        
        // Update GitHub Link
        const githubBtn = document.getElementById('p-github-link');
        if (githubBtn && project.github) {
            githubBtn.href = project.github;
            githubBtn.style.display = 'inline-flex';
        }

        // Multiple Image Support (Gallery)
        const gallery = document.getElementById('p-gallery');
        if (gallery && project.images) {
            gallery.innerHTML = '';
            project.images.forEach(imgUrl => {
                const imgWrap = document.createElement('div');
                imgWrap.className = 'gallery-item';
                const img = document.createElement('img');
                img.src = imgUrl;
                img.alt = project.title;
                imgWrap.appendChild(img);
                gallery.appendChild(imgWrap);
            });
        }
    };

    // i18n Core Logic
    const loadLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update project details if on project page
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        if (projectId && window.initProjectPage) {
            currentLang = lang;
            window.initProjectPage(projectId);
        }

        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        langToggle.textContent = lang === 'pt' ? 'English' : 'Português';
        currentLang = lang;
        localStorage.setItem('preferred-lang', lang);
    };

    langToggle.addEventListener('click', () => {
        const nextLang = currentLang === 'pt' ? 'en' : 'pt';
        loadLanguage(nextLang);
    });

    loadLanguage(currentLang);

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .project-card, .skill-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `.reveal { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
});
