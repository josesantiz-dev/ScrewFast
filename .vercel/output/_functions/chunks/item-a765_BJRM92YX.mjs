import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DhNoaUZN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"SF-AB A765","description":"Ensemble de Vis Assorties","main":{"id":2,"content":"Découvrez l'ensemble de vis assorties SF-AB A765 – la solution ultime pour vos besoins de fixation. Ce set complet comprend une grande variété de vis soigneusement sélectionnées pour aborder divers projets avec facilité et précision.\n","imgCard":"@/images/product-image-2.avif","imgMain":"@/images/product-image-main-2.avif","imgAlt":"Boîtes factices de l'ensemble de vis assorties"},"tabs":[{"id":"tabs-with-card-item-1","dataTab":"#tabs-with-card-1","title":"Description"},{"id":"tabs-with-card-item-2","dataTab":"#tabs-with-card-2","title":"Spécifications"},{"id":"tabs-with-card-item-3","dataTab":"#tabs-with-card-3","title":"Plans"}],"longDescription":{"title":"Solutions Polyvalentes de Fixation","subTitle":"L'ensemble de vis assorties SF-AB A765 offre une polyvalence et une commodité inégalées, ce qui en fait le choix idéal pour les amateurs de bricolage et les professionnels. Avec une sélection complète de vis, vous aurez toujours le bon élément de fixation pour chaque tâche.\n","btnTitle":"Contactez les ventes pour en savoir plus","btnURL":"#"},"descriptionList":[{"title":"Grande Variété","subTitle":"Comprend une gamme diversifiée de types et de tailles de vis pour s'adapter à diverses applications et matériaux."},{"title":"Facilité d'Utilisation","subTitle":"Chaque vis est conçue pour une installation facile, garantissant une fixation sans tracas à chaque fois."},{"title":"Commodité","subTitle":"Élimine le besoin de multiples déplacements au magasin de bricolage, économisant temps et effort sur vos projets."}],"specificationsLeft":[{"title":"Matériau","subTitle":"Fabriqué à partir de matériaux de haute qualité tels que l'acier inoxydable, assurant durabilité et résistance à la corrosion."},{"title":"Assortiment","subTitle":"Contient un assortiment généreux de vis, incluant des vis à bois, des vis mécaniques, et des vis pour tôle."},{"title":"Quantité","subTitle":"Chaque set comprend une quantité suffisante de vis pour gérer une large gamme de projets et de tâches."},{"title":"Tailles","subTitle":"Disponible en différentes tailles pour s'adapter aux exigences de divers projets, assurant compatibilité et polyvalence."}],"tableData":[{"feature":["Spécification","Valeur"],"description":[["Longueur (mm)","Divers"],["Poids (g)","N/A"],["Matériau","Acier Inoxydable"],["Finition","Assortie"],["Contenu du Pack","Diverses vis dans un ensemble"]]}],"blueprints":{"first":"@/images/blueprint-1.avif","second":"@/images/blueprint-2.avif"}};
				const file = "/Users/josesantiz-dev/Desktop/ScrewFast/src/content/products/fr/item-a765.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
