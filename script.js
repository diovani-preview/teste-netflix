"use strict";


/* =========================================================
   CONFIGURAÇÃO DAS IMAGENS DO GITHUB

   As imagens devem ficar na mesma pasta de index.html.

   Exemplo:
   ./img01.jpg
   ./img02.jpg
   ...
   ./img30.jpg

   Caso todas as imagens sejam PNG, altere apenas:

   extension: "png"
========================================================= */

const IMAGE_CONFIG = {

    directory: "./",

    prefix: "img",

    extension: "jpg"

};


/* =========================================================
   UTILITÁRIOS DAS IMAGENS
========================================================= */

function formatNumber(number) {

    return String(number).padStart(
        2,
        "0"
    );

}


function getImageFileName(imageNumber) {

    return (
        `${IMAGE_CONFIG.prefix}` +
        `${formatNumber(imageNumber)}.` +
        `${IMAGE_CONFIG.extension}`
    );

}


function getImagePath(
    imageNumber,
    forceRefresh = false
) {

    const basePath =
        `${IMAGE_CONFIG.directory}` +
        `${getImageFileName(imageNumber)}`;


    if (!forceRefresh) {

        return basePath;

    }


    /*
       O parâmetro impede que o navegador reutilize
       uma resposta 404 antiga depois de a imagem
       ser adicionada ao GitHub.
    */

    return (
        `${basePath}` +
        `?update=${Date.now()}`
    );

}


/* =========================================================
   BANCO DE DADOS

   ORDEM EM TODOS OS CONTEÚDOS:

   01 — Conteúdo
   02 — Fórum
   03 — Vídeos
   04 — Atividades
   05 — Saiba Mais
========================================================= */

const categoryDefinitions = [

    /* =====================================================
       MITO E FILOSOFIA — IMG01 A IMG05
    ====================================================== */

    {
        id: "mito-filosofia",

        title: "Mito e Filosofia",

        subtitle:
            "Narrativas míticas, explicações simbólicas e o surgimento do pensamento filosófico.",

        symbol: "Ω",

        rgb: "184, 117, 255",

        imageStart: 1,

        items: [

            {
                type: "Conteúdo",

                title:
                    "Origens do pensamento filosófico",

                description:
                    "Textos introdutórios sobre mito, razão e nascimento da Filosofia.",

                icon: "Φ"
            },

            {
                type: "Fórum",

                title:
                    "O mito ainda explica o mundo?",

                description:
                    "Espaço de participação, argumentação e debate coletivo.",

                icon: "◌"
            },

            {
                type: "Vídeos",

                title:
                    "Do mito ao pensamento racional",

                description:
                    "Videoaulas e materiais audiovisuais sobre a Filosofia antiga.",

                icon: "▶"
            },

            {
                type: "Atividades",

                title:
                    "Mito, narrativa e explicação",

                description:
                    "Atividades de interpretação, comparação e reflexão filosófica.",

                icon: "✓"
            },

            {
                type: "Saiba Mais",

                title:
                    "Mitos, filósofos e narrativas",

                description:
                    "Leituras, textos complementares e materiais de aprofundamento.",

                icon: "✦"
            }

        ]
    },


    /* =====================================================
       TEORIA DO CONHECIMENTO — IMG06 A IMG10
    ====================================================== */

    {
        id: "teoria-conhecimento",

        title: "Teoria do Conhecimento",

        subtitle:
            "Verdade, crença, razão, experiência, dúvida e possibilidades do conhecimento humano.",

        symbol: "?",

        rgb: "78, 181, 255",

        imageStart: 6,

        items: [

            {
                type: "Conteúdo",

                title:
                    "O que podemos conhecer?",

                description:
                    "Conceitos sobre verdade, crença, razão, experiência e conhecimento.",

                icon: "?"
            },

            {
                type: "Fórum",

                title:
                    "Existe uma verdade absoluta?",

                description:
                    "Debate sobre verdade, opinião, evidência e interpretação.",

                icon: "◌"
            },

            {
                type: "Vídeos",

                title:
                    "Caminhos do conhecimento",

                description:
                    "Aulas sobre racionalismo, empirismo, criticismo e ceticismo.",

                icon: "▶"
            },

            {
                type: "Atividades",

                title:
                    "Razão, dúvida e experiência",

                description:
                    "Questões investigativas e exercícios sobre o conhecimento humano.",

                icon: "✓"
            },

            {
                type: "Saiba Mais",

                title:
                    "Verdade e pensamento",

                description:
                    "Textos filosóficos e materiais complementares para pesquisa.",

                icon: "✦"
            }

        ]
    },


    /* =====================================================
       ÉTICA — IMG11 A IMG15
    ====================================================== */

    {
        id: "etica",

        title: "Ética",

        subtitle:
            "Liberdade, responsabilidade, valores, escolhas, virtudes e convivência humana.",

        symbol: "⚖",

        rgb: "255, 181, 71",

        imageStart: 11,

        items: [

            {
                type: "Conteúdo",

                title:
                    "Liberdade e responsabilidade",

                description:
                    "Estudos sobre valores, escolhas, virtudes e ação moral.",

                icon: "⚖"
            },

            {
                type: "Fórum",

                title:
                    "Como devemos agir?",

                description:
                    "Discussões sobre decisões, valores e responsabilidade social.",

                icon: "◌"
            },

            {
                type: "Vídeos",

                title:
                    "Ética na vida cotidiana",

                description:
                    "Vídeos sobre virtude, dever, liberdade e consequências.",

                icon: "▶"
            },

            {
                type: "Atividades",

                title:
                    "Dilemas e decisões éticas",

                description:
                    "Situações-problema para análise, escolha e argumentação.",

                icon: "✓"
            },

            {
                type: "Saiba Mais",

                title:
                    "Pensadores da Ética",

                description:
                    "Textos de Aristóteles, Kant, Mill e outros filósofos.",

                icon: "✦"
            }

        ]
    },


    /* =====================================================
       FILOSOFIA POLÍTICA — IMG16 A IMG20
    ====================================================== */

    {
        id: "filosofia-politica",

        title: "Filosofia Política",

        subtitle:
            "Poder, Estado, justiça, democracia, cidadania, direitos e organização da sociedade.",

        symbol: "▥",

        rgb: "255, 97, 107",

        imageStart: 16,

        items: [

            {
                type: "Conteúdo",

                title:
                    "Poder, Estado e sociedade",

                description:
                    "Conceitos de poder, justiça, cidadania e organização política.",

                icon: "▥"
            },

            {
                type: "Fórum",

                title:
                    "O que torna uma sociedade justa?",

                description:
                    "Debates sobre desigualdade, direitos, justiça e democracia.",

                icon: "◌"
            },

            {
                type: "Vídeos",

                title:
                    "Ideias que organizaram sociedades",

                description:
                    "Aulas sobre contratualismo, democracia, poder e liberdade.",

                icon: "▶"
            },

            {
                type: "Atividades",

                title:
                    "Cidadania e participação",

                description:
                    "Atividades sobre direitos, deveres, democracia e vida coletiva.",

                icon: "✓"
            },

            {
                type: "Saiba Mais",

                title:
                    "Clássicos da Filosofia Política",

                description:
                    "Leituras de Platão, Hobbes, Locke, Rousseau, Marx e Arendt.",

                icon: "✦"
            }

        ]
    },


    /* =====================================================
       FILOSOFIA DA CIÊNCIA — IMG21 A IMG25
    ====================================================== */

    {
        id: "filosofia-ciencia",

        title: "Filosofia da Ciência",

        subtitle:
            "Método científico, hipóteses, evidências, paradigmas, tecnologia e limites da ciência.",

        symbol: "✧",

        rgb: "70, 213, 194",

        imageStart: 21,

        items: [

            {
                type: "Conteúdo",

                title:
                    "Conceitos sobre método, hipótese, evidência e explicação científica",

                description:
                    "Estude os principais conceitos empregados na investigação e na construção do conhecimento científico.",

                icon: "✧"
            },

            {
                type: "Fórum",

                title:
                    "Discussões sobre ciência, tecnologia, ética e sociedade",

                description:
                    "Participe de debates sobre os impactos científicos e tecnológicos na vida individual e coletiva.",

                icon: "◌"
            },

            {
                type: "Vídeos",

                title:
                    "Por dentro do cinema: como a ciência constrói explicações",

                description:
                    "Analise produções audiovisuais e compreenda como a ciência investiga e explica fenômenos.",

                icon: "▶"
            },

            {
                type: "Atividades",

                title:
                    "Revisão com atividades e jogos",

                description:
                    "Revise os conceitos de Filosofia da Ciência por meio de exercícios, desafios e jogos educativos.",

                icon: "✓"
            },

            {
                type: "Saiba Mais",

                title:
                    "Artigos científicos para aprofundar o tema",

                description:
                    "Acesse artigos, textos acadêmicos e materiais complementares relacionados à Filosofia da Ciência.",

                icon: "✦"
            }

        ]
    },


    /* =====================================================
       ESTÉTICA — IMG26 A IMG30
    ====================================================== */

    {
        id: "estetica",

        title: "Estética",

        subtitle:
            "Arte, beleza, sensibilidade, criação, interpretação e experiência estética.",

        symbol: "◐",

        rgb: "236, 114, 216",

        imageStart: 26,

        items: [

            {
                type: "Conteúdo",

                title:
                    "Arte, beleza e sensibilidade",

                description:
                    "Conceitos de beleza, criação artística e experiência estética.",

                icon: "◐"
            },

            {
                type: "Fórum",

                title:
                    "O que transforma algo em arte?",

                description:
                    "Espaço para discutir beleza, cultura, criação e interpretação.",

                icon: "◌"
            },

            {
                type: "Vídeos",

                title:
                    "Filosofia, arte e cultura",

                description:
                    "Videoaulas sobre arte, gosto, beleza e indústria cultural.",

                icon: "▶"
            },

            {
                type: "Atividades",

                title:
                    "Leitura e interpretação de obras",

                description:
                    "Atividades de observação, análise e produção estética.",

                icon: "✓"
            },

            {
                type: "Saiba Mais",

                title:
                    "Pensamento estético",

                description:
                    "Textos, obras e materiais para aprofundamento filosófico.",

                icon: "✦"
            }

        ]
    }

];


/* =========================================================
   GERAÇÃO DA NUMERAÇÃO IMG01 A IMG30
========================================================= */

const catalogData =
    categoryDefinitions.map(
        function (category) {

            return {

                ...category,

                items:
                    category.items.map(
                        function (
                            item,
                            index
                        ) {

                            return {

                                ...item,

                                number:
                                    formatNumber(
                                        index + 1
                                    ),

                                imageNumber:
                                    category.imageStart +
                                    index

                            };

                        }
                    )

            };

        }
    );


/* =========================================================
   CONFIGURAÇÕES DAS PÁGINAS INTERNAS
========================================================= */

const pageTypeSettings = {

    "Conteúdo": {

        sectionTitle:
            "Conteúdo principal",

        introduction:
            "Nesta página poderão ser organizados textos, conceitos, explicações e materiais de estudo.",

        materialTitle:
            "Conteúdos e explicações",

        materialDescription:
            "Insira textos, apresentações, documentos, infográficos e outros materiais relacionados ao tema.",

        cards: [

            {
                title:
                    "Conceitos fundamentais",

                text:
                    "Apresente as principais ideias necessárias para compreender o tema."
            },

            {
                title:
                    "Contextualização filosófica",

                text:
                    "Relacione o conteúdo aos filósofos, períodos históricos e problemas estudados."
            },

            {
                title:
                    "Síntese para estudo",

                text:
                    "Organize resumos, esquemas ou orientações que apoiem a aprendizagem."
            }

        ]

    },


    "Fórum": {

        sectionTitle:
            "Fórum de participação e debates",

        introduction:
            "Nesta página poderão ser apresentadas questões filosóficas para argumentação, diálogo e participação coletiva.",

        materialTitle:
            "Espaço do fórum",

        materialDescription:
            "Insira a pergunta norteadora, as regras de participação e o endereço da ferramenta de debate.",

        cards: [

            {
                title:
                    "Questão norteadora",

                text:
                    "Apresente uma pergunta filosófica clara, relevante e aberta ao debate."
            },

            {
                title:
                    "Participação",

                text:
                    "Defina critérios de argumentação, respeito e interação entre os participantes."
            },

            {
                title:
                    "Síntese do debate",

                text:
                    "Organize conclusões, diferentes perspectivas e questões que permaneceram abertas."
            }

        ]

    },


    "Vídeos": {

        sectionTitle:
            "Vídeos e produções audiovisuais",

        introduction:
            "Nesta página poderão ser organizadas videoaulas, documentários, filmes e produções relacionadas ao tema.",

        materialTitle:
            "Galeria de vídeos",

        materialDescription:
            "Insira vídeos do YouTube, Vimeo, Google Drive ou outros serviços compatíveis.",

        cards: [

            {
                title:
                    "Antes de assistir",

                text:
                    "Apresente o tema do vídeo e os aspectos que deverão ser observados."
            },

            {
                title:
                    "Exibição audiovisual",

                text:
                    "Insira a videoaula, o documentário, o filme ou o material selecionado."
            },

            {
                title:
                    "Depois de assistir",

                text:
                    "Organize questões de interpretação, análise ou debate sobre o vídeo."
            }

        ]

    },


    "Atividades": {

        sectionTitle:
            "Atividades e experiências",

        introduction:
            "Nesta página poderão ser disponibilizados exercícios, jogos, desafios e propostas de participação.",

        materialTitle:
            "Atividades da página",

        materialDescription:
            "Insira questionários, jogos, formulários, tarefas, desafios ou recursos interativos.",

        cards: [

            {
                title:
                    "Orientações",

                text:
                    "Apresente as instruções necessárias para realizar as atividades."
            },

            {
                title:
                    "Atividade principal",

                text:
                    "Organize o exercício, jogo ou desafio relacionado ao tema filosófico."
            },

            {
                title:
                    "Registro da aprendizagem",

                text:
                    "Reserve um espaço para respostas, produção textual ou reflexão final."
            }

        ]

    },


    "Saiba Mais": {

        sectionTitle:
            "Biblioteca — Saiba Mais",

        introduction:
            "Nesta página poderão ser reunidos artigos, livros, documentos, pesquisas e materiais complementares.",

        materialTitle:
            "Biblioteca de materiais",

        materialDescription:
            "Insira links, documentos em PDF, artigos científicos, livros digitais e sugestões de leitura.",

        cards: [

            {
                title:
                    "Leituras principais",

                text:
                    "Organize os textos fundamentais para o aprofundamento do tema."
            },

            {
                title:
                    "Materiais complementares",

                text:
                    "Disponibilize artigos, reportagens, entrevistas e outras fontes."
            },

            {
                title:
                    "Referências",

                text:
                    "Registre autores, obras, endereços eletrônicos e referências utilizadas."
            }

        ]

    }

};


/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

const homePage =
    document.getElementById("homePage");

const detailPage =
    document.getElementById("detailPage");

const catalog =
    document.getElementById("catalog");

const topbar =
    document.getElementById("topbar");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mainNavigation =
    document.getElementById("mainNavigation");

const mobileMenuOverlay =
    document.getElementById("mobileMenuOverlay");

const logoButton =
    document.getElementById("logoButton");

const footerLogoButton =
    document.getElementById("footerLogoButton");

const exploreButton =
    document.getElementById("exploreButton");

const finalExploreButton =
    document.getElementById("finalExploreButton");

const searchArea =
    document.getElementById("searchArea");

const searchButton =
    document.getElementById("searchButton");

const searchInput =
    document.getElementById("searchInput");

const emptySearch =
    document.getElementById("emptySearch");

const clearSearchButton =
    document.getElementById("clearSearchButton");

const refreshImagesButton =
    document.getElementById("refreshImagesButton");

const detailHero =
    document.getElementById("detailHero");

const detailCoverImage =
    document.getElementById("detailCoverImage");

const detailCoverFallback =
    document.getElementById("detailCoverFallback");

const detailFallbackSymbol =
    document.getElementById("detailFallbackSymbol");

const detailImageErrorText =
    document.getElementById("detailImageErrorText");

const detailCategory =
    document.getElementById("detailCategory");

const detailType =
    document.getElementById("detailType");

const detailTitle =
    document.getElementById("detailTitle");

const detailSubtitle =
    document.getElementById("detailSubtitle");

const detailPageNumber =
    document.getElementById("detailPageNumber");

const detailSectionTitle =
    document.getElementById("detailSectionTitle");

const detailIntroduction =
    document.getElementById("detailIntroduction");

const detailContentGrid =
    document.getElementById("detailContentGrid");

const materialAreaTitle =
    document.getElementById("materialAreaTitle");

const materialAreaDescription =
    document.getElementById("materialAreaDescription");

const detailBackTop =
    document.getElementById("detailBackTop");

const detailBackBottom =
    document.getElementById("detailBackBottom");

const detailRefreshImage =
    document.getElementById("detailRefreshImage");

const backToTop =
    document.getElementById("backToTop");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   ESTADO DO SISTEMA
========================================================= */

const ORIGIN_STORAGE_KEY =
    "philoflix-origin-state";


let currentCategoryId =
    null;


let currentItemNumber =
    null;


let currentImageNumber =
    null;


if (
    "scrollRestoration" in
    history
) {

    history.scrollRestoration =
        "manual";

}


/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

function normalizeText(text) {

    return text
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase()
        .trim();

}


function findCategory(categoryId) {

    return catalogData.find(
        function (category) {

            return (
                category.id ===
                categoryId
            );

        }
    );

}


function findItem(
    category,
    itemNumber
) {

    return category.items.find(
        function (item) {

            return (
                item.number ===
                itemNumber
            );

        }
    );

}


function closeMobileMenu() {

    mobileMenuButton.classList.remove(
        "active"
    );

    mainNavigation.classList.remove(
        "active"
    );

    mobileMenuOverlay.classList.remove(
        "active"
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* =========================================================
   CARREGAMENTO DA IMAGEM DA CAPA
========================================================= */

function loadCoverImage(
    card,
    image,
    imageNumber,
    forceRefresh = false
) {

    card.classList.remove(
        "image-error"
    );


    image.style.display =
        "block";


    image.onload =
        function () {

            card.classList.remove(
                "image-error"
            );

        };


    image.onerror =
        function () {

            image.onload =
                null;

            image.onerror =
                null;

            image.style.display =
                "none";

            card.classList.add(
                "image-error"
            );

        };


    image.src =
        getImagePath(
            imageNumber,
            forceRefresh
        );

}


/* =========================================================
   VERIFICA NOVAMENTE AS IMAGENS AUSENTES
========================================================= */

function refreshMissingImages() {

    const missingCards =
        catalog.querySelectorAll(
            ".cover-card.image-error"
        );


    missingCards.forEach(
        function (card) {

            const image =
                card.querySelector(
                    ".cover-image"
                );


            const imageNumber =
                Number(
                    card.dataset.imageNumber
                );


            if (
                image &&
                Number.isInteger(
                    imageNumber
                )
            ) {

                loadCoverImage(
                    card,
                    image,
                    imageNumber,
                    true
                );

            }

        }
    );


    if (
        currentImageNumber !==
        null &&
        !detailPage.hidden
    ) {

        loadDetailImage(
            currentImageNumber,
            true
        );

    }

}


/* =========================================================
   SALVAR A POSIÇÃO DE ORIGEM
========================================================= */

function saveOriginState(state) {

    try {

        sessionStorage.setItem(
            ORIGIN_STORAGE_KEY,
            JSON.stringify(state)
        );

    } catch (error) {

        console.warn(
            "Não foi possível salvar a posição do roteiro.",
            error
        );

    }

}


/* =========================================================
   RECUPERAR A POSIÇÃO DE ORIGEM
========================================================= */

function readOriginState() {

    try {

        const savedState =
            sessionStorage.getItem(
                ORIGIN_STORAGE_KEY
            );


        if (!savedState) {

            return null;

        }


        return JSON.parse(
            savedState
        );

    } catch (error) {

        console.warn(
            "Não foi possível recuperar a posição do roteiro.",
            error
        );


        return null;

    }

}


/* =========================================================
   ESTADO PADRÃO
========================================================= */

function createDefaultOriginState(
    categoryId =
        "mito-filosofia"
) {

    return {

        categoryId:
            categoryId,

        cardId:
            null,

        scrollY:
            null,

        railScrolls:
            {}

    };

}


/* =========================================================
   CAPTURA DO LOCAL DE ENTRADA
========================================================= */

function captureOriginState(
    categoryId,
    cardId
) {

    const railScrolls = {};


    document
        .querySelectorAll(
            ".cards-rail"
        )
        .forEach(
            function (rail) {

                railScrolls[
                    rail.dataset.categoryId
                ] = rail.scrollLeft;

            }
        );


    const state = {

        categoryId:
            categoryId,

        cardId:
            cardId,

        scrollY:
            window.scrollY,

        railScrolls:
            railScrolls

    };


    saveOriginState(
        state
    );


    return state;

}


/* =========================================================
   RESTAURAÇÃO EXATA DO LOCAL DE ENTRADA
========================================================= */

function restoreOriginState(state) {

    const safeState =
        state ||
        createDefaultOriginState();


    requestAnimationFrame(
        function () {

            requestAnimationFrame(
                function () {

                    const railScrolls =
                        safeState.railScrolls ||
                        {};


                    Object.keys(
                        railScrolls
                    ).forEach(
                        function (categoryId) {

                            const rail =
                                document.querySelector(
                                    `.cards-rail[data-category-id="${categoryId}"]`
                                );


                            if (rail) {

                                rail.scrollLeft =
                                    Number(
                                        railScrolls[
                                            categoryId
                                        ]
                                    ) || 0;

                            }

                        }
                    );


                    const categorySection =
                        document.getElementById(
                            safeState.categoryId
                        );


                    let targetScrollY =
                        0;


                    if (
                        safeState.scrollY !==
                        null &&
                        Number.isFinite(
                            Number(
                                safeState.scrollY
                            )
                        )
                    ) {

                        targetScrollY =
                            Number(
                                safeState.scrollY
                            );

                    } else if (
                        categorySection
                    ) {

                        targetScrollY =
                            categorySection.offsetTop -
                            95;

                    }


                    window.scrollTo({
                        top:
                            Math.max(
                                0,
                                targetScrollY
                            ),

                        left:
                            0,

                        behavior:
                            "auto"
                    });


                    if (
                        safeState.cardId
                    ) {

                        const originCard =
                            document.getElementById(
                                safeState.cardId
                            );


                        if (originCard) {

                            originCard.focus({
                                preventScroll:
                                    true
                            });

                        }

                    }

                }
            );

        }
    );

}


/* =========================================================
   CRIAÇÃO DE UMA CAPA
========================================================= */

function createCoverCard(
    category,
    item
) {

    const card =
        document.createElement(
            "button"
        );


    const cardId =
        `cover-${category.id}-${item.number}`;


    card.id =
        cardId;

    card.type =
        "button";

    card.className =
        "cover-card";


    card.dataset.categoryId =
        category.id;

    card.dataset.itemNumber =
        item.number;

    card.dataset.imageNumber =
        String(
            item.imageNumber
        );


    card.dataset.search =
        normalizeText(`
            ${category.title}
            ${category.subtitle}
            ${item.type}
            ${item.title}
            ${item.description}
        `);


    card.style.setProperty(
        "--card-rgb",
        category.rgb
    );


    card.setAttribute(
        "aria-label",
        `Acessar ${item.type}: ${item.title}`
    );


    const image =
        document.createElement(
            "img"
        );


    image.className =
        "cover-image";

    image.alt =
        "";

    image.loading =
        "lazy";

    image.decoding =
        "async";

    image.draggable =
        false;

    image.width =
        1600;

    image.height =
        900;


    const fallback =
        document.createElement(
            "div"
        );


    fallback.className =
        "cover-fallback";


    fallback.innerHTML = `

        <span aria-hidden="true">
            ${item.icon}
        </span>

        <strong>
            ${item.type}
        </strong>

        <small>
            Aguardando ${getImageFileName(item.imageNumber)}
        </small>

    `;


    const indicator =
        document.createElement(
            "span"
        );


    indicator.className =
        "cover-access-indicator";

    indicator.setAttribute(
        "aria-hidden",
        "true"
    );

    indicator.textContent =
        "→";


    card.appendChild(
        image
    );

    card.appendChild(
        fallback
    );

    card.appendChild(
        indicator
    );


    loadCoverImage(
        card,
        image,
        item.imageNumber,
        false
    );


    return card;

}


/* =========================================================
   CRIAÇÃO DE UM CONTEÚDO ESTRUTURANTE
========================================================= */

function createCategorySection(
    category
) {

    const section =
        document.createElement(
            "section"
        );


    section.className =
        "content-section";

    section.id =
        category.id;


    section.dataset.search =
        normalizeText(
            `${category.title} ${category.subtitle}`
        );


    section.style.setProperty(
        "--category-rgb",
        category.rgb
    );


    const heading =
        document.createElement(
            "div"
        );


    heading.className =
        "section-heading";


    heading.innerHTML = `

        <div class="section-title-area">

            <span
                class="section-symbol"
                aria-hidden="true"
            >
                ${category.symbol}
            </span>

            <div>

                <h2>
                    ${category.title}
                </h2>

                <p>
                    ${category.subtitle}
                </p>

            </div>

        </div>


        <div class="section-controls">

            <button
                class="rail-button rail-left"
                type="button"
                aria-label="Mover capas para a esquerda"
            >
                ‹
            </button>

            <button
                class="rail-button rail-right"
                type="button"
                aria-label="Mover capas para a direita"
            >
                ›
            </button>

        </div>

    `;


    const rail =
        document.createElement(
            "div"
        );


    rail.className =
        "cards-rail";

    rail.dataset.categoryId =
        category.id;


    category.items.forEach(
        function (item) {

            rail.appendChild(
                createCoverCard(
                    category,
                    item
                )
            );

        }
    );


    section.appendChild(
        heading
    );

    section.appendChild(
        rail
    );


    const leftButton =
        heading.querySelector(
            ".rail-left"
        );


    const rightButton =
        heading.querySelector(
            ".rail-right"
        );


    leftButton.addEventListener(
        "click",
        function () {

            rail.scrollBy({
                left:
                    -rail.clientWidth *
                    0.8,

                behavior:
                    "smooth"
            });

        }
    );


    rightButton.addEventListener(
        "click",
        function () {

            rail.scrollBy({
                left:
                    rail.clientWidth *
                    0.8,

                behavior:
                    "smooth"
            });

        }
    );


    return section;

}


/* =========================================================
   RENDERIZAÇÃO DO CATÁLOGO
========================================================= */

function renderCatalog() {

    catalog.innerHTML =
        "";


    catalogData.forEach(
        function (category) {

            catalog.appendChild(
                createCategorySection(
                    category
                )
            );

        }
    );

}


/* =========================================================
   CLIQUES NAS CAPAS

   O evento funciona para todas as capas criadas
   dinamicamente.
========================================================= */

catalog.addEventListener(
    "click",
    function (event) {

        const selectedCard =
            event.target.closest(
                ".cover-card"
            );


        if (
            !selectedCard ||
            !catalog.contains(
                selectedCard
            )
        ) {

            return;

        }


        event.preventDefault();


        const categoryId =
            selectedCard.dataset.categoryId;


        const itemNumber =
            selectedCard.dataset.itemNumber;


        const originState =
            captureOriginState(
                categoryId,
                selectedCard.id
            );


        openDetailPage(
            categoryId,
            itemNumber,
            {
                pushHistory:
                    true,

                originState:
                    originState
            }
        );

    }
);


/* =========================================================
   CONTEÚDO DAS PÁGINAS INTERNAS
========================================================= */

function renderDetailContent(item) {

    const settings =
        pageTypeSettings[
            item.type
        ];


    if (!settings) {

        console.error(
            "Tipo de página não configurado:",
            item.type
        );


        return;

    }


    detailSectionTitle.textContent =
        settings.sectionTitle;


    detailIntroduction.textContent =
        settings.introduction;


    materialAreaTitle.textContent =
        settings.materialTitle;


    materialAreaDescription.textContent =
        settings.materialDescription;


    detailContentGrid.innerHTML =
        "";


    settings.cards.forEach(
        function (
            information,
            index
        ) {

            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "detail-information-card";


            article.innerHTML = `

                <span>
                    ${formatNumber(index + 1)}
                </span>

                <h3>
                    ${information.title}
                </h3>

                <p>
                    ${information.text}
                </p>

            `;


            detailContentGrid.appendChild(
                article
            );

        }
    );

}


/* =========================================================
   IMAGEM DA PÁGINA INTERNA
========================================================= */

function loadDetailImage(
    imageNumber,
    forceRefresh = false
) {

    detailCoverImage.style.display =
        "block";


    detailCoverFallback.classList.remove(
        "visible"
    );


    detailRefreshImage.hidden =
        true;


    detailCoverImage.onload =
        function () {

            detailCoverFallback.classList.remove(
                "visible"
            );


            detailRefreshImage.hidden =
                true;

        };


    detailCoverImage.onerror =
        function () {

            detailCoverImage.onload =
                null;

            detailCoverImage.onerror =
                null;

            detailCoverImage.style.display =
                "none";

            detailCoverFallback.classList.add(
                "visible"
            );

            detailRefreshImage.hidden =
                false;

        };


    detailCoverImage.src =
        getImagePath(
            imageNumber,
            forceRefresh
        );

}


/* =========================================================
   ABRIR PÁGINA INTERNA
========================================================= */

function openDetailPage(
    categoryId,
    itemNumber,
    options = {}
) {

    const category =
        findCategory(
            categoryId
        );


    if (!category) {

        console.error(
            "Conteúdo estruturante não encontrado:",
            categoryId
        );


        return;

    }


    const item =
        findItem(
            category,
            itemNumber
        );


    if (!item) {

        console.error(
            "Ambiente não encontrado:",
            itemNumber
        );


        return;

    }


    currentCategoryId =
        category.id;


    currentItemNumber =
        item.number;


    currentImageNumber =
        item.imageNumber;


    const originState =
        options.originState ||
        readOriginState() ||
        createDefaultOriginState(
            category.id
        );


    saveOriginState(
        originState
    );


    if (
        options.pushHistory
    ) {

        history.replaceState(
            {
                view:
                    "home",

                originState:
                    originState
            },

            "",

            "#/"
        );


        history.pushState(
            {
                view:
                    "detail",

                categoryId:
                    category.id,

                itemNumber:
                    item.number,

                originState:
                    originState
            },

            "",

            `#/${category.id}/${item.number}`
        );

    }


    detailHero.style.setProperty(
        "--detail-rgb",
        category.rgb
    );


    detailPage.style.setProperty(
        "--detail-rgb",
        category.rgb
    );


    detailCategory.textContent =
        category.title;


    detailType.textContent =
        item.type;


    detailTitle.textContent =
        item.title;


    detailSubtitle.textContent =
        item.description;


    detailPageNumber.textContent =
        `AMBIENTE ${item.number}`;


    detailFallbackSymbol.textContent =
        item.icon;


    detailImageErrorText.textContent =
        `Aguardando a publicação de ${getImageFileName(item.imageNumber)} no repositório.`;


    detailCoverImage.alt =
        `Imagem de ${item.type}: ${item.title}`;


    loadDetailImage(
        item.imageNumber,
        false
    );


    renderDetailContent(
        item
    );


    homePage.hidden =
        true;


    detailPage.hidden =
        false;


    searchArea.classList.remove(
        "active"
    );


    closeMobileMenu();


    window.scrollTo({
        top:
            0,

        left:
            0,

        behavior:
            "auto"
    });


    document.title =
        `${item.title} | Philoflix`;

}


/* =========================================================
   VOLTAR AO ROTEIRO
========================================================= */

function showRoteiro(
    originState,
    replaceHistory = true
) {

    const safeOriginState =
        originState ||
        readOriginState() ||
        createDefaultOriginState(
            currentCategoryId ||
            "mito-filosofia"
        );


    detailPage.hidden =
        true;


    homePage.hidden =
        false;


    document.title =
        "Philoflix | Filosofia";


    if (
        replaceHistory
    ) {

        history.replaceState(
            {
                view:
                    "home",

                originState:
                    safeOriginState
            },

            "",

            "#/"
        );

    }


    restoreOriginState(
        safeOriginState
    );


    currentCategoryId =
        null;


    currentItemNumber =
        null;


    currentImageNumber =
        null;

}


function returnToRoteiro() {

    const historyOriginState =
        history.state &&
        history.state.originState
            ? history.state.originState
            : null;


    const originState =
        historyOriginState ||
        readOriginState() ||
        createDefaultOriginState(
            currentCategoryId ||
            "mito-filosofia"
        );


    showRoteiro(
        originState,
        true
    );

}


detailBackTop.addEventListener(
    "click",
    returnToRoteiro
);


detailBackBottom.addEventListener(
    "click",
    returnToRoteiro
);


/* =========================================================
   VERIFICAR NOVAMENTE UMA IMAGEM INTERNA
========================================================= */

detailRefreshImage.addEventListener(
    "click",
    function () {

        if (
            currentImageNumber !==
            null
        ) {

            loadDetailImage(
                currentImageNumber,
                true
            );

        }

    }
);


/* =========================================================
   NAVEGAÇÃO PELO MENU
========================================================= */

function navigateToSection(sectionId) {

    detailPage.hidden =
        true;


    homePage.hidden =
        false;


    closeMobileMenu();


    history.replaceState(
        {
            view:
                "home"
        },

        "",

        "#/"
    );


    requestAnimationFrame(
        function () {

            const target =
                document.getElementById(
                    sectionId
                );


            if (!target) {

                return;

            }


            target.scrollIntoView({
                behavior:
                    "smooth",

                block:
                    "start"
            });

        }
    );

}


document
    .querySelectorAll(
        "[data-navigation]"
    )
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    navigateToSection(
                        button.dataset.navigation
                    );

                }
            );

        }
    );


/* =========================================================
   MENU MÓVEL
========================================================= */

mobileMenuButton.addEventListener(
    "click",
    function () {

        const isOpen =
            mainNavigation.classList.contains(
                "active"
            );


        if (isOpen) {

            closeMobileMenu();

            return;

        }


        mobileMenuButton.classList.add(
            "active"
        );


        mainNavigation.classList.add(
            "active"
        );


        mobileMenuOverlay.classList.add(
            "active"
        );


        mobileMenuButton.setAttribute(
            "aria-expanded",
            "true"
        );

    }
);


mobileMenuOverlay.addEventListener(
    "click",
    closeMobileMenu
);


/* =========================================================
   LOGOTIPOS
========================================================= */

function goToTop() {

    detailPage.hidden =
        true;


    homePage.hidden =
        false;


    currentCategoryId =
        null;


    currentItemNumber =
        null;


    currentImageNumber =
        null;


    document.title =
        "Philoflix | Filosofia";


    history.replaceState(
        {
            view:
                "home"
        },

        "",

        "#/"
    );


    window.scrollTo({
        top:
            0,

        left:
            0,

        behavior:
            "smooth"
    });

}


logoButton.addEventListener(
    "click",
    goToTop
);


footerLogoButton.addEventListener(
    "click",
    goToTop
);


/* =========================================================
   BOTÕES DE EXPLORAÇÃO
========================================================= */

exploreButton.addEventListener(
    "click",
    function () {

        navigateToSection(
            "mito-filosofia"
        );

    }
);


finalExploreButton.addEventListener(
    "click",
    function () {

        navigateToSection(
            "mito-filosofia"
        );

    }
);


/* =========================================================
   VERIFICAR NOVAS IMAGENS
========================================================= */

refreshImagesButton.addEventListener(
    "click",
    function () {

        refreshMissingImages();


        refreshImagesButton.textContent =
            "✓ Verificação realizada";


        window.setTimeout(
            function () {

                refreshImagesButton.textContent =
                    "↻ Verificar novas imagens";

            },
            1800
        );

    }
);


/*
   Quando o usuário volta para a aba depois de inserir
   imagens no GitHub, o sistema verifica novamente
   as capas que ainda estavam ausentes.
*/

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.visibilityState ===
            "visible"
        ) {

            refreshMissingImages();

        }

    }
);


window.addEventListener(
    "online",
    refreshMissingImages
);


/* =========================================================
   PESQUISA
========================================================= */

function filterCatalog(searchTerm) {

    const normalizedTerm =
        normalizeText(
            searchTerm
        );


    const sections =
        catalog.querySelectorAll(
            ".content-section"
        );


    let totalVisibleCards =
        0;


    sections.forEach(
        function (section) {

            const categoryMatches =
                normalizedTerm === "" ||
                section.dataset.search.includes(
                    normalizedTerm
                );


            const cards =
                section.querySelectorAll(
                    ".cover-card"
                );


            let visibleCards =
                0;


            cards.forEach(
                function (card) {

                    const matches =
                        normalizedTerm === "" ||
                        categoryMatches ||
                        card.dataset.search.includes(
                            normalizedTerm
                        );


                    card.hidden =
                        !matches;


                    if (matches) {

                        visibleCards++;

                        totalVisibleCards++;

                    }

                }
            );


            section.classList.toggle(
                "hidden-by-search",

                visibleCards ===
                0
            );

        }
    );


    emptySearch.classList.toggle(
        "visible",

        normalizedTerm !== "" &&
        totalVisibleCards === 0
    );

}


function clearSearch() {

    searchInput.value =
        "";


    filterCatalog(
        ""
    );


    searchArea.classList.remove(
        "active"
    );


    searchInput.blur();

}


searchButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        if (
            !detailPage.hidden
        ) {

            showRoteiro(
                readOriginState(),
                true
            );

        }


        searchArea.classList.add(
            "active"
        );


        window.setTimeout(
            function () {

                searchInput.focus();

            },
            100
        );

    }
);


searchArea.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

    }
);


document.addEventListener(
    "click",
    function () {

        if (
            searchInput.value.trim() ===
            ""
        ) {

            searchArea.classList.remove(
                "active"
            );

        }

    }
);


searchInput.addEventListener(
    "input",
    function () {

        filterCatalog(
            searchInput.value
        );

    }
);


clearSearchButton.addEventListener(
    "click",
    clearSearch
);


/* =========================================================
   HISTÓRICO DO NAVEGADOR
========================================================= */

window.addEventListener(
    "popstate",
    function (event) {

        const state =
            event.state;


        if (
            state &&
            state.view ===
            "detail"
        ) {

            openDetailPage(
                state.categoryId,
                state.itemNumber,
                {
                    pushHistory:
                        false,

                    originState:
                        state.originState
                }
            );


            return;

        }


        showRoteiro(
            state &&
            state.originState
                ? state.originState
                : readOriginState(),

            false
        );

    }
);


/* =========================================================
   ENDEREÇOS INTERNOS
========================================================= */

function loadInitialRoute() {

    const route =
        window.location.hash.match(
            /^#\/([^/]+)\/(\d{2})$/
        );


    if (route) {

        const categoryId =
            route[1];


        const itemNumber =
            route[2];


        const originState =
            createDefaultOriginState(
                categoryId
            );


        history.replaceState(
            {
                view:
                    "detail",

                categoryId:
                    categoryId,

                itemNumber:
                    itemNumber,

                originState:
                    originState
            },

            "",

            window.location.hash
        );


        openDetailPage(
            categoryId,
            itemNumber,
            {
                pushHistory:
                    false,

                originState:
                    originState
            }
        );


        return;

    }


    history.replaceState(
        {
            view:
                "home"
        },

        "",

        "#/"
    );


    homePage.hidden =
        false;


    detailPage.hidden =
        true;

}


/* =========================================================
   ROLAGEM
========================================================= */

function handlePageScroll() {

    topbar.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );


    backToTop.classList.toggle(
        "visible",
        window.scrollY > 650
    );

}


window.addEventListener(
    "scroll",
    handlePageScroll,
    {
        passive:
            true
    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top:
                0,

            behavior:
                "smooth"
        });

    }
);


/* =========================================================
   TECLA ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        if (
            mainNavigation.classList.contains(
                "active"
            )
        ) {

            closeMobileMenu();

            return;

        }


        if (
            !detailPage.hidden
        ) {

            returnToRoteiro();

        }

    }
);


/* =========================================================
   REDIMENSIONAMENTO
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth >
            980
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function initializePlatform() {

    renderCatalog();


    currentYear.textContent =
        new Date().getFullYear();


    loadInitialRoute();


    handlePageScroll();

}


document.addEventListener(
    "DOMContentLoaded",
    initializePlatform
);