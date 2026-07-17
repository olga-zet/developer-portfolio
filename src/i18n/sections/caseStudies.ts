// caseStudies.ts

export const caseStudies = {
  pl: {
    sections: {
      overview: "Opis projektu",
      challengeAndSolution: "Wyzwanie i rozwiązanie",
      features: "Kluczowe funkcjonalności",
      technicalDecisions: "Decyzje techniczne",
      process: "Proces",
      result: "Rezultat",
    },

    navigation: {
      previous: "Poprzedni projekt",
      next: "Następny projekt",
      backTo: "Powrót do",
      allProjects: "Wszystkie projekty",
    },

    items: {
      tarotApp: {
        hero: {
          label: "Case study",

          title: {
            first: "Tarot",
            second: "App",
          },

          description:
            "Cyfrowe doświadczenie inspirowane tarotem, łączące wybór kart, rozbudowane rozkłady i interpretacje generowane przez AI.",

          actions: {
            demo: "Zobacz demo",
            repository: "Prywatne repozytorium na życzenie",
          },

          meta: {
            role: {
              label: "Rola",
              value: "Full-stack Developer",
            },

            year: {
              label: "Rok",
              value: "2026",
            },

            type: {
              label: "Typ",
              value: "Projekt własny",
            },
          },

          images: {
            desktopAlt: "Aplikacja tarotowa wyświetlona na ekranie komputera",

            mobileAlt: "Mobilny interfejs aplikacji tarotowej",
          },
        },

        overview: {
          title: {
            first: "Więcej niż",
            second: "losowanie kart.",
          },

          description:
            "Aplikacja prowadzi użytkownika przez cały proces odczytu — od zadania pytania i wyboru rozkładu po wybór kart oraz otrzymanie interpretacji dopasowanej do ich pozycji i orientacji.",

          imageAlts: [
            "Interfejs rozkładu Krzyż Celtycki",
            "Widok interpretacji odczytu tarotowego",
            "Biblioteka kart tarota",
          ],
        },

        challengeAndSolution: {
          challenge: {
            title: "Wyzwanie",

            description:
              "Aplikacja musiała obsługiwać kilka rodzajów rozkładów, różne pozycje kart, znaczenia proste i odwrócone oraz wieloetapowy proces odczytu bez przeciążania użytkownika.",
          },

          solution: {
            title: "Rozwiązanie",

            description:
              "Oddzieliłam konfigurację rozkładów od warstwy prezentacji i stworzyłam uporządkowany proces prowadzący użytkownika przez wybór pytania, rozkładu, kart i interpretacji.",
          },

          flow: {
            question: "Pytanie",
            spread: "Rozkład",
            cards: "Karty",
            interpretation: "Interpretacja",
          },
        },

        features: {
          items: {
            cardSelection: {
              title: "Wybór kart",

              description:
                "Animowany wybór kart z obsługą pozycji prostych i odwróconych oraz kontrolowaną kolejnością odkrywania.",

              imageAlt: "Animowany interfejs wyboru kart tarota",
            },

            aiInterpretation: {
              title: "Interpretacja AI",

              description:
                "Interpretacja uwzględnia pytanie użytkownika, znaczenie karty, jej orientację oraz pozycję zajmowaną w wybranym rozkładzie.",

              imageAlt: "Widok interpretacji tarotowej generowanej przez AI",
            },

            celticCross: {
              title: "Krzyż Celtycki",

              description:
                "Rozbudowany rozkład dziesięciu kart z własną konfiguracją pozycji, znaczeń i kolejności odkrywania.",

              imageAlt: "Dziesięciokartowy rozkład Krzyż Celtycki",
            },
          },
        },

        technicalDecisions: {
          title: {
            first: "Zbudowana z myślą",
            second: "o złożoności.",
          },

          items: {
            configDrivenSpreads: {
              title: "Rozkłady oparte na konfiguracji",

              description:
                "Każdy rozkład jest opisany przez osobną konfigurację danych, dzięki czemu jego pozycje i kolejność kart nie są zapisane bezpośrednio w komponentach interfejsu.",
            },

            typedModels: {
              title: "Typowane modele aplikacji",

              description:
                "Modele TypeScript opisują karty, rozkłady, pozycje, orientacje oraz odpowiedzi API, zapewniając spójność danych pomiędzy kolejnymi etapami odczytu.",
            },

            apiLayer: {
              title: "Oddzielna warstwa API",

              description:
                "Frontend komunikuje się z dedykowanym backendem odpowiedzialnym za dane kart, generowanie odczytów i integrację z bazą danych.",
            },

            secureAi: {
              title: "Bezpieczna integracja AI",

              description:
                "Klucz API i logika budowania promptów pozostają po stronie serwera, dzięki czemu poufne dane nie są udostępniane w przeglądarce.",
            },
          },
        },

        process: {
          before: {
            label: "Przed",

            title: "Zbyt wiele działo się jednocześnie.",

            description:
              "Pierwsza wersja odczytu prezentowała użytkownikowi zbyt dużo informacji w jednym momencie, przez co trudno było skupić się na kolejnych etapach.",

            imageAlt: "Pierwsza wersja interfejsu odczytu tarotowego",
          },

          after: {
            label: "Po",

            title: "Prowadzony, sekwencyjny proces.",

            description:
              "W finalnej wersji karty są wybierane, odkrywane i interpretowane krok po kroku, dzięki czemu cały proces jest bardziej czytelny i angażujący.",

            imageAlt: "Finalny sekwencyjny interfejs odczytu tarotowego",
          },
        },

        result: {
          stats: {
            cards: "Kart",
            spreads: "Rozkłady",
            languages: "Języki",
            product: "Kompletny produkt",
          },

          description:
            "Finalna aplikacja łączy rozbudowaną logikę interfejsu, animacje, REST API, bazę danych, obsługę dwóch języków oraz interpretacje generowane przez AI.",

          lesson:
            "Najważniejszą decyzją było oddzielenie konfiguracji rozkładów i logiki produktu od warstwy prezentacji, co ułatwiło rozwijanie kolejnych typów odczytów.",
        },
      },

      cvMaker: {
        hero: {
          label: "Case study",

          title: {
            first: "CV",
            second: "Maker",
          },

          description:
            "Aplikacja, która krok po kroku pomaga stworzyć dopracowane CV — z podglądem zmian na żywo, personalizacją wyglądu i eksportem do PDF.",

          actions: {
            demo: "Zobacz demo",
            repository: "Prywatne repozytorium na życzenie",
          },

          meta: {
            role: {
              label: "Rola",
              value: "Frontend Developer",
            },

            year: {
              label: "Rok",
              value: "2026",
            },

            type: {
              label: "Typ",
              value: "Projekt własny",
            },
          },

          images: {
            desktopAlt: "Aplikacja CV Maker wyświetlona na ekranie komputera",

            mobileAlt: "Mobilny interfejs aplikacji CV Maker",
          },
        },

        overview: {
          title: {
            first: "Od pustej strony",
            second: "do gotowego CV.",
          },

          description:
            "CV Maker był moim pierwszym projektem po powrocie do programowania. Stworzyłam go, aby ponownie wejść w rytm pracy z Reactem i TypeScriptem oraz przejść przez cały proces budowania kompletnej aplikacji frontendowej.",

          imageAlts: [
            "Wieloetapowy formularz tworzenia CV",
            "Podgląd dokumentu aktualizowany na żywo",
            "Widok wyboru szablonu CV",
          ],
        },

        challengeAndSolution: {
          challenge: {
            title: "Wyzwanie",

            description:
              "Najważniejszym wyzwaniem było uporządkowanie danych z wieloetapowego formularza i synchronizowanie ich z podglądem dokumentu bez komplikowania struktury aplikacji.",
          },

          solution: {
            title: "Rozwiązanie",

            description:
              "Oparłam formularz i podgląd na wspólnym modelu danych, podzieliłam proces na krótsze etapy i wydzieliłam szablony CV do osobnych komponentów.",
          },

          flow: {
            template: "Szablon",
            details: "Dane",
            customize: "Personalizacja",
            export: "Eksport",
          },
        },

        features: {
          items: {
            guidedEditor: {
              title: "Kreator krok po kroku",

              description:
                "Formularz został podzielony na czytelne etapy, aby użytkownik mógł skupić się na jednej grupie informacji w danym momencie.",

              imageAlt: "Wieloetapowy kreator danych do CV",
            },

            livePreview: {
              title: "Podgląd na żywo",

              description:
                "Każda zmiana w formularzu jest natychmiast widoczna w podglądzie dokumentu, dzięki czemu użytkownik przez cały czas widzi efekt swojej pracy.",

              imageAlt: "Podgląd CV aktualizowany podczas edycji",
            },

            customizationAndExport: {
              title: "Personalizacja i eksport",

              description:
                "Użytkownik może wybrać szablon, dopasować wygląd dokumentu i zapisać ukończone CV jako plik PDF.",

              imageAlt: "Personalizacja wyglądu i eksport CV do PDF",
            },
          },
        },

        technicalDecisions: {
          title: {
            first: "Prosta struktura.",
            second: "Czytelny proces.",
          },

          items: {
            sharedDataModel: {
              title: "Wspólny model danych",

              description:
                "Formularz oraz podgląd dokumentu korzystają z tego samego modelu danych, dzięki czemu zawartość CV pozostaje zsynchronizowana podczas edycji.",
            },

            stepBasedForm: {
              title: "Formularz podzielony na etapy",

              description:
                "Duży formularz został rozbity na mniejsze sekcje, aby uprościć nawigację i ograniczyć liczbę informacji wyświetlanych jednocześnie.",
            },

            reusableTemplates: {
              title: "Reużywalne szablony",

              description:
                "Każdy szablon CV jest osobnym komponentem, który otrzymuje te same dane i przedstawia je w innym układzie wizualnym.",
            },

            responsiveInterface: {
              title: "Responsywny interfejs",

              description:
                "Układ formularza, wybór szablonu i podgląd dokumentu dostosowują się do szerokości ekranu, zachowując czytelność również na mniejszych urządzeniach.",
            },
          },
        },

        process: {
          before: {
            label: "Przed",

            title: "Zbyt wiele elementów na małym ekranie.",

            description:
              "Pierwsza wersja prezentowała kilka szablonów obok siebie, co działało na desktopie, ale na urządzeniach mobilnych powodowało zatłoczony i niewygodny układ.",

            imageAlt: "Pierwsza wersja wyboru szablonów CV",
          },

          after: {
            label: "Po",

            title: "Responsywny wybór szablonu.",

            description:
              "Zmieniłam wybór szablonów w responsywny carousel, który pokazuje kilka propozycji na większych ekranach i jeden skoncentrowany widok na telefonie.",

            imageAlt: "Responsywny carousel wyboru szablonów CV",
          },
        },

        result: {
          stats: {
            steps: "Etapy kreatora",
            templates: "Szablony CV",
            preview: "Podgląd na żywo",
            export: "Eksport do PDF",
          },

          description:
            "Powstała kompletna aplikacja frontendowa prowadząca użytkownika od wyboru szablonu i uzupełnienia danych po personalizację wyglądu oraz eksport gotowego dokumentu.",

          lesson:
            "Jako pierwszy projekt po powrocie do programowania CV Maker pozwolił mi odbudować swobodę pracy z Reactem i TypeScriptem oraz przećwiczyć zarządzanie stanem formularza, strukturę komponentów i responsywne układy.",
        },
      },
    },
  },

  en: {
    sections: {
      overview: "Overview",
      challengeAndSolution: "Challenge & solution",
      features: "Key features",
      technicalDecisions: "Technical decisions",
      process: "Process",
      result: "Result",
    },

    navigation: {
      previous: "Previous project",
      next: "Next project",
      backTo: "Back to",
      allProjects: "All projects",
    },

    items: {
      tarotApp: {
        hero: {
          label: "Case study",

          title: {
            first: "Tarot",
            second: "App",
          },

          description:
            "A digital experience inspired by tarot, combining card selection, structured spreads and AI-generated interpretations.",

          actions: {
            demo: "View live demo",
            repository: "Private repository on request",
          },

          meta: {
            role: {
              label: "Role",
              value: "Full-stack Developer",
            },

            year: {
              label: "Year",
              value: "2026",
            },

            type: {
              label: "Type",
              value: "Independent project",
            },
          },

          images: {
            desktopAlt: "Tarot application displayed on a desktop screen",

            mobileAlt: "Mobile interface of the tarot application",
          },
        },

        overview: {
          title: {
            first: "More than",
            second: "a card draw.",
          },

          description:
            "The application guides users through the complete reading process — from entering a question and choosing a spread to selecting cards and receiving an interpretation based on their positions and orientations.",

          imageAlts: [
            "Celtic Cross spread interface",
            "Tarot reading interpretation view",
            "Tarot card library",
          ],
        },

        challengeAndSolution: {
          challenge: {
            title: "The challenge",

            description:
              "The application needed to support several spread types, different card positions, upright and reversed meanings, and a multi-stage reading process without overwhelming the user.",
          },

          solution: {
            title: "The solution",

            description:
              "I separated spread configuration from the presentation layer and created a structured flow that guides users through the question, spread, card selection and interpretation stages.",
          },

          flow: {
            question: "Question",
            spread: "Spread",
            cards: "Cards",
            interpretation: "Interpretation",
          },
        },

        features: {
          items: {
            cardSelection: {
              title: "Card selection",

              description:
                "Animated card selection with support for upright and reversed orientations and a controlled reveal sequence.",

              imageAlt: "Animated tarot card selection interface",
            },

            aiInterpretation: {
              title: "AI interpretation",

              description:
                "Each interpretation considers the user’s question, the meaning of the card, its orientation and its position within the selected spread.",

              imageAlt: "AI-generated tarot interpretation view",
            },

            celticCross: {
              title: "Celtic Cross",

              description:
                "A complete ten-card spread with its own configuration of positions, meanings and reveal order.",

              imageAlt: "Ten-card Celtic Cross tarot spread",
            },
          },
        },

        technicalDecisions: {
          title: {
            first: "Built for",
            second: "complexity.",
          },

          items: {
            configDrivenSpreads: {
              title: "Config-driven spreads",

              description:
                "Each spread is defined through a separate data configuration, keeping its positions and card sequence outside the interface components.",
            },

            typedModels: {
              title: "Typed application models",

              description:
                "TypeScript models describe cards, spreads, positions, orientations and API responses, keeping data consistent throughout the reading flow.",
            },

            apiLayer: {
              title: "Separated API layer",

              description:
                "The frontend communicates with a dedicated backend responsible for card data, reading generation and database integration.",
            },

            secureAi: {
              title: "Secure AI integration",

              description:
                "The API key and prompt-building logic remain on the server, preventing sensitive credentials from being exposed in the browser.",
            },
          },
        },

        process: {
          before: {
            label: "Before",

            title: "Too much happened at once.",

            description:
              "The first version of the reading displayed too much information at the same moment, making it difficult to focus on each stage of the experience.",

            imageAlt: "First version of the tarot reading interface",
          },

          after: {
            label: "After",

            title: "A guided, sequential experience.",

            description:
              "In the final version, cards are selected, revealed and interpreted step by step, creating a clearer and more engaging reading flow.",

            imageAlt: "Final sequential tarot reading interface",
          },
        },

        result: {
          stats: {
            cards: "Cards",
            spreads: "Spreads",
            languages: "Languages",
            product: "Complete product",
          },

          description:
            "The final application combines complex interface logic, animations, a REST API, database integration, multilingual content and AI-generated interpretations.",

          lesson:
            "The most important decision was separating spread configuration and product logic from the presentation layer, making it easier to develop additional reading types.",
        },
      },

      cvMaker: {
        hero: {
          label: "Case study",

          title: {
            first: "CV",
            second: "Maker",
          },

          description:
            "An application that guides users through creating a polished CV with live preview, visual customization and PDF export.",

          actions: {
            demo: "View live demo",
            repository: "Private repository on request",
          },

          meta: {
            role: {
              label: "Role",
              value: "Frontend Developer",
            },

            year: {
              label: "Year",
              value: "2026",
            },

            type: {
              label: "Type",
              value: "Independent project",
            },
          },

          images: {
            desktopAlt: "CV Maker application displayed on a desktop screen",

            mobileAlt: "Mobile interface of the CV Maker application",
          },
        },

        overview: {
          title: {
            first: "From blank page",
            second: "to finished CV.",
          },

          description:
            "CV Maker was my first project after returning to frontend development. I created it to rebuild my programming routine, return to React and TypeScript, and complete an entire frontend application from idea to working product.",

          imageAlts: [
            "Multi-step CV creation form",
            "Document preview updating in real time",
            "CV template selection interface",
          ],
        },

        challengeAndSolution: {
          challenge: {
            title: "The challenge",

            description:
              "The main challenge was organizing data from a multi-step form and keeping the document preview synchronized without making the application structure unnecessarily complex.",
          },

          solution: {
            title: "The solution",

            description:
              "I based both the form and the preview on a shared data model, divided the process into smaller stages and separated the CV templates into reusable components.",
          },

          flow: {
            template: "Template",
            details: "Details",
            customize: "Customize",
            export: "Export",
          },
        },

        features: {
          items: {
            guidedEditor: {
              title: "Guided editor",

              description:
                "The form is divided into clear stages so users can focus on one group of information at a time.",

              imageAlt: "Multi-step CV data editor",
            },

            livePreview: {
              title: "Live preview",

              description:
                "Every form update is immediately reflected in the document preview, allowing users to see the final result while editing.",

              imageAlt: "CV preview updating during editing",
            },

            customizationAndExport: {
              title: "Customize and export",

              description:
                "Users can select a template, customize the document’s appearance and save the finished CV as a PDF file.",

              imageAlt: "CV appearance customization and PDF export",
            },
          },
        },

        technicalDecisions: {
          title: {
            first: "Simple structure.",
            second: "Clear flow.",
          },

          items: {
            sharedDataModel: {
              title: "Shared data model",

              description:
                "The form and document preview use the same data model, keeping the CV content synchronized throughout the editing process.",
            },

            stepBasedForm: {
              title: "Step-based form",

              description:
                "The large form is divided into smaller sections to simplify navigation and reduce the amount of information displayed at once.",
            },

            reusableTemplates: {
              title: "Reusable templates",

              description:
                "Each CV template is a separate component that receives the same document data and presents it through a different visual layout.",
            },

            responsiveInterface: {
              title: "Responsive interface",

              description:
                "The editor, template selector and document preview adapt to different screen sizes while remaining readable on smaller devices.",
            },
          },
        },

        process: {
          before: {
            label: "Before",

            title: "Too many elements on a small screen.",

            description:
              "The first version displayed several templates side by side. It worked on desktop but created a crowded and difficult-to-use layout on mobile devices.",

            imageAlt: "First version of the CV template selector",
          },

          after: {
            label: "After",

            title: "Responsive template selection.",

            description:
              "I changed the selector into a responsive carousel that displays several options on larger screens and one focused template on mobile.",

            imageAlt: "Responsive CV template selection carousel",
          },
        },

        result: {
          stats: {
            steps: "Editor steps",
            templates: "CV templates",
            preview: "Live preview",
            export: "PDF export",
          },

          description:
            "The result is a complete frontend application that guides users from selecting a template and entering their information to customizing and exporting a finished CV.",

          lesson:
            "As my first project after returning to development, CV Maker helped me rebuild confidence with React and TypeScript while practicing form state, component structure and responsive layouts.",
        },
      },
    },
  },
} as const;
