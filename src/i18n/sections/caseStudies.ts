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
            "Responsywny, wieloetapowy kreator CV, który prowadzi użytkownika od wyboru szablonu do wydrukowania dokumentu lub zapisania go jako PDF. Był to mój pierwszy projekt po powrocie do programowania po przerwie zawodowej.",

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

            mobileAlt: "Mobilny widok wieloetapowego formularza CV Maker",
          },
        },

        overview: {
          title: {
            first: "Jeden formularz.",
            second: "Wiele szablonów.",
          },

          description:
            "CV Maker był moim pierwszym samodzielnym projektem po powrocie do programowania. Aplikacja prowadzi użytkownika przez wybór szablonu, uzupełnienie danych i przygotowanie gotowego dokumentu. Jeden model danych i wspólny formularz obsługują wszystkie dostępne układy CV.",

          imageAlts: [
            "Wieloetapowy formularz do tworzenia CV",
            "Gotowy dokument CV po uzupełnieniu danych",
            "Galeria dostępnych szablonów CV",
          ],
        },

        challengeAndSolution: {
          challenge: {
            title: "Jeden kreator. Różne układy.",

            description:
              "Głównym wyzwaniem było stworzenie jednego formularza obsługującego kilka różnych szablonów CV. Każdy layout może wykorzystywać inny zestaw informacji, dlatego osobne formularze prowadziłyby do duplikowania komponentów, walidacji i logiki zarządzania danymi.",
          },

          solution: {
            title: "Architektura oparta na schematach.",

            description:
              "Zastosowałam wspólny model CVData oraz centralną konfigurację templateSchemas, która określa pola i sekcje obsługiwane przez każdy layout. Formularz został podzielony na logiczne kroki przy użyciu React Hook Form i FormProvider.",
          },

          flow: {
            template: "Wybór szablonu",
            form: "Formularz",
            validation: "Walidacja",
            printPdf: "Druk / PDF",
          },
        },

        features: {
          items: {
            dynamicTemplateConfiguration: {
              title: "Dynamiczna konfiguracja szablonów",

              description:
                "Formularz dostosowuje dostępne sekcje i pola do wybranego szablonu. Konfiguracja znajduje się w jednym miejscu zamiast w wielu komponentach.",

              imageAlt: "Widok konfiguracji i wyboru szablonów CV",
            },

            multiStepForm: {
              title: "Formularz wieloetapowy",

              description:
                "Duża liczba informacji została podzielona na krótsze, logiczne etapy, dzięki czemu użytkownik nie musi wypełniać całego formularza na jednym ekranie.",

              imageAlt: "Wieloetapowy formularz danych użytkownika",
            },

            responsiveTemplateCarousel: {
              title: "Responsywna karuzela szablonów",

              description:
                "Liczba widocznych szablonów oraz zakres przesuwania karuzeli dostosowują się do szerokości ekranu.",

              imageAlt: "Responsywna karuzela dostępnych szablonów CV",
            },

            printReadyCv: {
              title: "CV gotowe do druku",

              description:
                "Gotowy dokument można wydrukować lub zapisać jako PDF za pomocą systemowego okna drukowania przeglądarki.",

              imageAlt:
                "Gotowe CV przygotowane do wydruku lub zapisania jako PDF",
            },
          },
        },

        technicalDecisions: {
          title: {
            first: "Zbudowany",
            second: "z myślą o rozwoju.",
          },

          items: {
            schemaDrivenTemplates: {
              title: "Szablony oparte na schematach",

              description:
                "Konfiguracja templateSchemas określa pola i sekcje wykorzystywane przez każdy layout. Dodanie kolejnego szablonu nie wymaga tworzenia osobnego formularza.",
            },

            typedDataModel: {
              title: "Typowany model danych",

              description:
                "Wspólny model CVData zapewnia spójną strukturę informacji. Wykorzystanie keyof CVData pozwala TypeScriptowi wykrywać nieprawidłowe nazwy pól.",
            },

            sharedFormContext: {
              title: "Wspólny kontekst formularza",

              description:
                "React Hook Form i FormProvider pozwalają dzielić formularz na niezależne kroki bez ręcznego przekazywania stanu przez wiele poziomów komponentów.",
            },

            printStyles: {
              title: "Style drukowania",

              description:
                "Dedykowane style drukowania ukrywają elementy interfejsu i przygotowują dokument do wydrukowania lub zapisania jako PDF.",
            },
          },
        },

        process: {
          before: {
            label: "Początek",
            category: "Projektowanie ścieżki użytkownika",
            title: "Działająca wersja.",

            description:
              "Pierwsza wersja projektu koncentrowała się na zbudowaniu kompletnej ścieżki użytkownika i ponownym wejściu w regularną pracę z Reactem i TypeScriptem. Część logiki była silniej powiązana z komponentami.",

            imageAlt: "Pierwsza wersja formularza CV Maker",
          },

          after: {
            label: "Iteracja",
            category: "Dopracowanie architektury",
            title: "Uporządkowany system.",

            description:
              "W kolejnych iteracjach rozdzieliłam odpowiedzialności, wprowadziłam wspólny model danych, centralną konfigurację szablonów oraz reużywalne komponenty formularza.",

            imageAlt: "Uporządkowana wieloetapowa wersja CV Maker",
          },
        },

        result: {
          stats: {
            templates: "Szablonów",
            steps: "Główne kroki",
            dataModel: "Wspólny model danych",
            export: "Druk / zapis",
          },

          description:
            "Powstał skalowalny kreator CV, w którym pięć szablonów korzysta z jednego modelu danych i wspólnego formularza. Użytkownik przechodzi przez czytelny proces, a następnie może wydrukować dokument lub zapisać go jako PDF.",

          lesson:
            "CV Maker był projektem, który wyznaczył mój powrót do regularnego programowania. Pozwolił mi odbudować warsztat techniczny, uporządkować wiedzę i przygotować podstawę do realizacji kolejnych, bardziej rozbudowanych projektów.",
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
            "A responsive, multi-step CV builder that guides users from template selection to printing the finished document or saving it as a PDF. It was my first project after returning to software development following a career break.",

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

            mobileAlt: "Mobile view of the CV Maker multi-step form",
          },
        },

        overview: {
          title: {
            first: "One form.",
            second: "Multiple templates.",
          },

          description:
            "CV Maker was my first independent project after returning to software development. The application guides users through template selection, data entry and preparation of the finished document. A shared data model and one form support every available CV layout.",

          imageAlts: [
            "Multi-step CV creation form",
            "Finished CV document after completing the form",
            "Gallery of available CV templates",
          ],
        },

        challengeAndSolution: {
          challenge: {
            title: "One builder. Different layouts.",

            description:
              "The main challenge was creating one form that could support several CV templates. Each layout may use a different set of information, so separate forms would duplicate components, validation rules and data-management logic.",
          },

          solution: {
            title: "Schema-driven architecture.",

            description:
              "I introduced a shared CVData model and a central templateSchemas configuration that defines the fields and sections supported by each layout. The form was divided into logical steps using React Hook Form and FormProvider.",
          },

          flow: {
            template: "Template",
            form: "Form",
            validation: "Validation",
            printPdf: "Print / PDF",
          },
        },

        features: {
          items: {
            dynamicTemplateConfiguration: {
              title: "Dynamic template configuration",

              description:
                "The form adapts its available sections and fields to the selected template. The configuration is kept in one place instead of being distributed across multiple components.",

              imageAlt: "CV template configuration and selection view",
            },

            multiStepForm: {
              title: "Multi-step form",

              description:
                "A large amount of information is divided into shorter, logical stages, so users do not have to complete the entire form on a single screen.",

              imageAlt: "Multi-step form for entering CV information",
            },

            responsiveTemplateCarousel: {
              title: "Responsive template carousel",

              description:
                "The number of visible templates and the carousel movement range adapt to the available screen width.",

              imageAlt: "Responsive carousel of available CV templates",
            },

            printReadyCv: {
              title: "Print-ready CV",

              description:
                "The finished document can be printed or saved as a PDF through the browser’s system print dialog.",

              imageAlt: "Finished CV prepared for printing or saving as a PDF",
            },
          },
        },

        technicalDecisions: {
          title: {
            first: "Built",
            second: "to scale.",
          },

          items: {
            schemaDrivenTemplates: {
              title: "Schema-driven templates",

              description:
                "The templateSchemas configuration defines the fields and sections used by each layout. Adding another template does not require building a separate form.",
            },

            typedDataModel: {
              title: "Typed data model",

              description:
                "The shared CVData model provides a consistent information structure. Using keyof CVData allows TypeScript to detect invalid field names.",
            },

            sharedFormContext: {
              title: "Shared form context",

              description:
                "React Hook Form and FormProvider allow the form to be divided into independent steps without manually passing state through multiple component levels.",
            },

            printStyles: {
              title: "Print styles",

              description:
                "Dedicated print styles hide interface controls and prepare the document for printing or saving as a PDF.",
            },
          },
        },

        process: {
          before: {
            label: "Starting point",
            category: "User flow",
            title: "The first working version.",

            description:
              "The first version focused on building a complete user flow and returning to regular work with React and TypeScript. Some of the logic was more tightly coupled to individual components.",

            imageAlt: "First version of the CV Maker form",
          },

          after: {
            label: "Iteration",
            category: "Architecture refinement",
            title: "A structured system.",

            description:
              "In later iterations, I separated responsibilities and introduced a shared data model, central template configuration and reusable form components.",

            imageAlt: "Structured multi-step version of CV Maker",
          },
        },

        result: {
          stats: {
            templates: "Templates",
            steps: "Main steps",
            dataModel: "Shared data model",
            export: "Print / save",
          },

          description:
            "The result is a scalable CV builder in which five templates use one shared data model and form. Users move through a clear process before printing the document or saving it as a PDF.",

          lesson:
            "CV Maker marked my return to regular software development. It helped me rebuild my technical workflow, consolidate my knowledge and create a foundation for the more advanced projects that followed.",
        },
      },
    },
  },
} as const;
