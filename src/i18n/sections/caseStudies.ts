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
            "Pełnostackowa aplikacja tarotowa, która prowadzi użytkownika od pytania i wyboru kart do kontekstowej interpretacji generowanej przez AI.",

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
            first: "Od pytania.",
            second: "Do jednej historii.",
          },

          description:
            "Aplikacja obsługuje odczyty jednej, trzech i dziesięciu kart. Prowadzi użytkownika przez wybór rozkładu i kart, a następnie prezentuje interpretację uwzględniającą pytanie, pozycję oraz orientację każdej karty.",

          imageAlts: [
            "Interfejs wyboru rozkładu tarotowego",
            "Widok interpretacji odczytu tarotowego",
            "Biblioteka kart tarota",
          ],
        },

        challengeAndSolution: {
          challenge: {
            title: "Wiele stanów. Jeden spójny odczyt.",

            description:
              "Największym wyzwaniem było połączenie kilku rodzajów rozkładów, pozycji kart, orientacji prostych i odwróconych, sekwencji wyboru oraz odpowiedzi AI w jeden czytelny proces użytkownika.",
          },

          solution: {
            title: "Rozdzielone etapy i typowane dane.",

            description:
              "Podzieliłam proces na pytanie, wybór rozkładu, wybór kart i interpretację. Wynik zwracany przez backend jest mapowany do typowanych modeli widoku, dzięki czemu komponenty odpowiadają głównie za prezentację danych.",
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
              title: "Kontrolowany wybór kart",

              description:
                "Animowany interfejs prowadzi użytkownika przez wybieranie i odkrywanie kart w określonej kolejności. Każda karta może pojawić się w pozycji prostej lub odwróconej.",

              imageAlt: "Animowany interfejs wyboru i odkrywania kart tarota",
            },

            aiInterpretation: {
              title: "Interpretacja zależna od kontekstu",

              description:
                "Interpretacja uwzględnia pytanie użytkownika, znaczenie karty, jej orientację oraz pozycję w rozkładzie. Wynik zawiera opisy poszczególnych kart, wspólną syntezę i końcową wskazówkę.",

              imageAlt:
                "Kontekstowa interpretacja tarotowa generowana przez AI",
            },

            celticCross: {
              title: "Różne modele odczytu",

              description:
                "Aplikacja obsługuje szybki odczyt jednej karty, rozkład trzech kart oraz rozbudowany, dziesięciokartowy Krzyż Celtycki. Każdy wariant ma własny sposób prezentacji wyniku.",

              imageAlt: "Dziesięciokartowy rozkład Krzyż Celtycki",
            },
          },
        },

        technicalDecisions: {
          title: {
            first: "Złożona logika.",
            second: "Czytelne komponenty.",
          },

          items: {
            viewModelMapping: {
              title: "Modele widoku dla interpretacji",

              description:
                "Dane odczytu są mapowane do osobnych, typowanych modeli widoku przed przekazaniem ich do komponentów. Interfejs otrzymuje przygotowane nazwy, pozycje, interpretacje, porady i informacje o orientacji kart.",
            },

            typedModels: {
              title: "Typowany przepływ danych",

              description:
                "Modele TypeScript opisują karty, odczyty, orientacje, wyniki interpretacji oraz odpowiedzi API. Pozwala to zachować spójność danych pomiędzy frontendem, backendem i kolejnymi etapami procesu.",
            },

            apiLayer: {
              title: "Frontend i dedykowane REST API",

              description:
                "Frontend komunikuje się z backendem Node.js i Express, który odpowiada za dane kart, integrację z bazą PostgreSQL oraz przygotowanie wyników odczytu.",
            },

            secureAi: {
              title: "AI po stronie serwera",

              description:
                "Klucz API oraz logika budowania kontekstu dla modelu AI pozostają na backendzie. Dzięki temu poufne dane nie są udostępniane w kodzie wykonywanym w przeglądarce.",
            },
          },
        },

        process: {
          before: {
            label: "Etap 01",
            category: "Interakcja użytkownika",
            title: "Od pytania do wybranych kart.",

            description:
              "Użytkownik zadaje pytanie, wybiera rodzaj rozkładu, a następnie odkrywa karty w kontrolowanej kolejności. Aplikacja zachowuje pozycję, orientację i kolejność każdej wybranej karty.",

            imageAlt: "Proces wybierania kart w aplikacji tarotowej",
          },

          after: {
            label: "Etap 02",
            category: "Przetwarzanie i prezentacja",
            title: "Od danych do spójnej interpretacji.",

            description:
              "Dane kart są łączone z pytaniem użytkownika, ich pozycjami i orientacjami. Wynik zostaje następnie przekształcony do modeli widoku i przedstawiony jako interpretacje kart, wspólna synteza oraz końcowa wskazówka.",

            imageAlt: "Widok kompletnej interpretacji odczytu tarotowego",
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
            "Finalna aplikacja łączy wieloetapowy interfejs, animacje, typowane modele danych, REST API, bazę PostgreSQL, obsługę dwóch języków oraz kontekstowe interpretacje generowane przez AI.",

          lesson:
            "Najważniejszą decyzją było oddzielenie danych odczytu od sposobu ich prezentacji. Mapowanie odpowiedzi backendu do modeli widoku uprościło komponenty, ułatwiło obsługę brakujących danych i pozwoliło rozwijać różne typy interpretacji.",
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
            "A full-stack tarot application that guides users from a question and card selection to a contextual AI-generated interpretation.",

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
            first: "From a question.",
            second: "To one story.",
          },

          description:
            "The application supports one-card, three-card and ten-card readings. It guides users through spread and card selection before presenting an interpretation based on the question, position and orientation of each card.",

          imageAlts: [
            "Tarot spread selection interface",
            "Tarot reading interpretation view",
            "Tarot card library",
          ],
        },

        challengeAndSolution: {
          challenge: {
            title: "Multiple states. One coherent reading.",

            description:
              "The main challenge was combining several reading types, card positions, upright and reversed orientations, selection sequences and AI responses into one clear user flow.",
          },

          solution: {
            title: "Separated stages and typed data.",

            description:
              "I divided the process into the question, spread selection, card selection and interpretation stages. Results returned by the backend are mapped into typed view models, allowing the components to focus primarily on presentation.",
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
              title: "Controlled card selection",

              description:
                "The animated interface guides users through selecting and revealing cards in a defined sequence. Each card may appear in an upright or reversed orientation.",

              imageAlt: "Animated tarot card selection and reveal interface",
            },

            aiInterpretation: {
              title: "Context-aware interpretation",

              description:
                "Each interpretation considers the user’s question, the card meaning, its orientation and its position within the spread. The result includes individual card interpretations, a shared synthesis and final guidance.",

              imageAlt: "Context-aware AI-generated tarot interpretation",
            },

            celticCross: {
              title: "Different reading models",

              description:
                "The application supports a quick one-card reading, a three-card spread and a detailed ten-card Celtic Cross. Each variant has its own method of presenting the result.",

              imageAlt: "Ten-card Celtic Cross tarot spread",
            },
          },
        },

        technicalDecisions: {
          title: {
            first: "Complex logic.",
            second: "Focused components.",
          },

          items: {
            viewModelMapping: {
              title: "View models for interpretations",

              description:
                "Reading data is mapped into separate typed view models before being passed to the components. The interface receives prepared card names, positions, interpretations, advice and orientation data.",
            },

            typedModels: {
              title: "Typed data flow",

              description:
                "TypeScript models describe cards, readings, orientations, interpretation results and API responses. This keeps data consistent across the frontend, backend and individual stages of the reading process.",
            },

            apiLayer: {
              title: "Frontend and dedicated REST API",

              description:
                "The frontend communicates with a Node.js and Express backend responsible for card data, PostgreSQL integration and preparing reading results.",
            },

            secureAi: {
              title: "Server-side AI integration",

              description:
                "The API key and the logic responsible for building context for the AI model remain on the backend, preventing sensitive data from being exposed in browser code.",
            },
          },
        },

        process: {
          before: {
            label: "Stage 01",
            category: "User interaction",
            title: "From a question to selected cards.",

            description:
              "Users enter a question, choose a reading type and reveal cards in a controlled sequence. The application preserves the position, orientation and order of every selected card.",

            imageAlt: "Card selection process in the tarot application",
          },

          after: {
            label: "Stage 02",
            category: "Processing and presentation",
            title: "From data to a coherent interpretation.",

            description:
              "Card data is combined with the user’s question, card positions and orientations. The result is then transformed into view models and presented as individual interpretations, a shared synthesis and final guidance.",

            imageAlt: "Complete tarot reading interpretation view",
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
            "The final application combines a multi-stage interface, animations, typed data models, a REST API, PostgreSQL integration, multilingual support and contextual AI-generated interpretations.",

          lesson:
            "The most important decision was separating reading data from its presentation. Mapping backend responses into view models simplified the components, improved handling of incomplete data and made different interpretation types easier to develop.",
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
