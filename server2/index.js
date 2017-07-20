var Recipe = require('./classes/Recipe.js');
console.log(Recipe);

var recepies = [
  {
    id: 0,
    image: 'american-maccaroni-salad',
    name: 'american maccaroni salad',
    timeOfPreparation: 20,
    totalTime: 30,
    servings: 6,
    level: 'easy',
    description:
      'In a large bowl combine the macaroni, celery, onion, parsley and tomato, if using. In a small bowl, whisk together the mayonnaise, mustard, sugar, vinegar, sour cream and salt. Pour the dressing over the salad and stir to combine. Season with salt and pepper to taste. Serve. Store covered in the refrigerator, for up to 3 days.',
    ingredients: [44, 6, 22, 46, 37, 59, 61],
    amount: [
      '2 cups dry macaroni, cooked, einsed, and drained',
      '1/3 cup diced celery',
      '1/4 cup miced red onion, soaked in cold water for 5 minutes, drained',
      '1 tablespoon minced flat-leaf parsley',
      '3 tablespoons sour cream',
      '1/2 cup prepared mayonnaise',
      '3/4 teaspoon dry mustard',
      '1 1/2 teaspoon sugar',
      '1/2 teaspoon kosher salt, plus more to taste',
      'freashly ground black pepper',
      '1 1/2 tablespoons cider vinegar'
    ]
  },
  {
    id: 1,
    image: 'beer-marinated-grilled-skirt-steak',
    name: 'beer marinated grilled skirt steak',
    timeOfPreparation: 10,
    totalTime: 80,
    servings: 4,
    level: 'easy',
    description:
      'In a wide, shallow glass baking dish, scatter half of the orange slices, half of the onion slices and half of the garlic pieces on the bottom of the dish. Sprinkle the steak all over with salt and pepper and put in the dish on top of the orange and onion slices. Scatter the remaining orange, onion and garlic over the steak and pour in the beer and soy sauce. Cover with plastic wrap and marinate for 1 hour at room temperature or up to overnight in the refrigerator. ',
    ingredients: [34, 8, 9, 39, 59],
    amount: [
      '1 orange thinly sliced with peel',
      '1/2 onion thinly sliced',
      '4 garlic cloves, halved and smashed',
      '2  150 grams skirt steak',
      'Kosher salt and fresh ground black pepper',
      '1 cup light-colored beer (preferably lager style)',
      '1/2 cup soy sauce'
    ]
  },
  {
    id: 2,
    image: 'buttermilk-pork-chops-with-corn-relish',
    name: 'buttermilk pork chops with corn relish',
    timeOfPreparation: 25,
    totalTime: 285,
    servings: 6,
    level: 'intermediate',
    description:
      'Make the brine: Combine the buttermilk, brown sugar, 2 tablespoons olive oil, 3 tablespoons salt, the garlic, bay leaves, hot sauce and peppercorns in a large bowl. Remove 4 wide strips of lemon zest with a vegetable peeler and add to the brine; squeeze in the juice of half of the lemon. Pierce both sides of the pork chops a few times with a paring knife. Add the pork to the brine, turning to coat. Cover and refrigerate at least 4 hours or overnight.Remove the pork chops from the refrigerator 30 minutes before grilling. Preheat a grill to medium high and lightly brush the grates with vegetable oil. Remove the pork from the brine, letting the excess drip off, and transfer to the grill. Cover and cook until marked, about 7 minutes. Flip and continue cooking, uncovered, until the other side is marked, about 7 more minutes.Meanwhile, rub the corn with 1 tablespoon olive oil and season with salt. Wrap each ear in foil and place on the grill. Grill, turning occasionally, until charred, about 10 minutes.Remove the pork from the grill; let rest 5 minutes. Cut the corn kernels from the cobs. Combine the corn, the juice of the remaining 1/2 lemon, the remaining 1 tablespoon olive oil, the parsley and chives in a bowl and toss; season with salt. Serve with the pork chops.',
    ingredients: [9, 48, 47, 40, 49, 46, 8],
    amount: [
      '2 cups buttermilk',
      '3 tablespoons packed light brown sugar',
      '4 tablespoons extra-virgin olive oil',
      'Kosher salt',
      '6 cloves garlic, smashed',
      '6 bay leaves',
      '2 teaspoons hot sauce',
      '12 black peppercorns',
      '1 lemon,',
      '6 bone-in center-cut pork loin chops (2,5 cm thick; about 1350 grams total)',
      'Vegetable oil, for brushing',
      '6 ears of corn, husked',
      '1/4 cup chopped fresh parsley',
      '2 tablespoons chopped fresh chives'
    ]
  },
  {
    id: 3,
    image: 'beef-stew',
    name: 'beef stew',
    timeOfPreparation: 15,
    totalTime: 195,
    servings: 5,
    level: 'intermediate',
    description:
      'Heat a large Dutch oven with a tight-fitting lid over medium-high heat. Pour in enough oil to fill the pan about 0,5 cm deep. Season the beef generously with salt and pepper, and add to the pan. Saute half the meat, uncovered, stirring only occasionally, until well-browned, about 8 minutes. Using a slotted spoon, transfer the beef to a plate. Repeat with the remaining beef. Discard the oil and wipe out the pan.Preheat the oven to 325 degrees F. Return the pot to the stove and melt the butter over medium high heat. Add the onion and cook, stirring, until lightly browned, about 5 minutes. Add the garlic and cook, stirring, until fragrant, about 1 minute. Add the tomato paste and cook, stirring, until lightly browned, about 1 minute more. Add the reserved beef and scatter the flour over the vegetable and beef mixture (enough to lightly coat) and cook stirring until lightly toasted. Add the water or broth, and bring to a simmer. Tie the parsley, thyme, and bay leaves together with a piece of kitchen twine and add the bundle to the pot. Season with 2 teaspoons salt, or to taste. Cover and transfer to the oven. Cook the meat until just tender, about 1 1/2 hours. (This can also be done on the stove at a low simmer.)',
    ingredients: [39, 8, 9, 46, 50, 48, 20, 25, 6, 27],
    amount: [
      'Vegetable oil, for searing',
      '2 250 grams beef chuck, cut into 5 cm cubes',
      'Kosher salt and freshly ground black pepper',
      '2 tablespoons unsalted butter',
      '2 medium onions, cut into 6ths',
      '5 cloves garlic, crushed',
      '1 tablespoon tomato paste',
      '1/3 cup all-purpose flour, or to cover',
      '6 sprigs parsley',
      '6 sprigs fresh thyme',
      '2 bay leaves',
      '1 120g medium red potatoes, quartered',
      '4 medium carrots, cut into 5 cm pieces',
      '2 celery stalks, cut into 4 cm pieces',
      '7 canned whole, peeled tomatoes, lightly crushed',
      '2 to 3 teaspoons red wine vinegar, or to taste',
      '10 cups cold water, or chicken or beef broth, homemade or low-sodium canned'
    ]
  },
  {
    id: 4,
    image: 'agnolotti-with-artichoke-sauce',
    name: 'agnolotti with artichoke sauce',
    timeOfPreparation: 15,
    totalTime: 25,
    servings: 4,
    level: 'easy',
    description:
      'Combine the artichokes, half-and-half, garlic, red pepper flakes and 1/4 teaspoon salt in a large skillet and bring to a simmer over medium heat. Cover and cook until the artichokes are tender, about 5 minutes. Add the peas and continue to cook, covered, until tender, about 5 more minutes. Remove from the heat and stir in the lemon zest and juice. Discard the garlic clove.Meanwhile, bring a large pot of salted water to a boil. Add the agnolotti and cook as the label directs. Reserve 1/2 cup cooking water, then drain the pasta and transfer to the skillet with the sauce.Add the parmesan to the skillet and gently stir until the pasta is coated. Thin the sauce with some of the reserved cooking water.',
    ingredients: [51, 9, 19, 47, 36, 62],
    amount: [
      '1 250 package frozen artichoke hearts, thawed and coarsely chopped',
      '1 clove garlic, smashed',
      '1/8 teaspoon red pepper flakes',
      '1 cup frozen peas (do not thaw)',
      '1 teaspoon finely grated lemon zest',
      '2 teaspoons fresh lemon juice',
      '500 grams refrigerated cheese agnolotti (moon-shaped stuffed pasta) or ravioli',
      '1/4 cup finely grated parmesan cheese',
      '1 cup half and half'
    ]
  },
  {
    id: 5,
    image: 'fried-chicken',
    name: 'fried chicken',
    timeOfPreparation: 10,
    totalTime: 10,
    servings: 6,
    level: 'easy',
    description:
      'Place crackers in a large resealable plastic bag; seal bag and crush crackers with a rolling pin until they are coarse crumbs. Add the flour, potato flakes, seasoned salt, and pepper and mix well.Beat egg in a shallow dish or bowl. One by one, dredge chicken pieces in egg, then place in bag with crumb mixture. Seal bag and shake to coat. Heat oil in a deep-fryer or large saucepan to 350 degrees F (175 degrees C).Fry chicken, turning frequently, until golden brown and juices run clear, 15 to 20 minutes.',
    ingredients: [20, 38, 42],
    amount: [
      '30 saltine crackers',
      '2 tablespoons all-purpose flour',
      '2 tablespoons dry potato flakes',
      '1 teaspoon seasoned salt',
      '1/2 teaspoon ground black pepper',
      '1 egg ',
      '6 skinless, boneless chicken breast halves',
      '2 cups vegetable oil for frying'
    ]
  },
  {
    id: 6,
    image: 'garlicky-grilled-chicken-portobello-and-radicchio-salad',
    name: 'garlicky grilled chicken, portobello, and radicchio salad',
    timeOfPreparation: 10,
    totalTime: 35,
    servings: 5,
    level: 'easy',
    description:
      'Put the garlic onto a cutting board and sprinkle it with about 1/2 teaspoon salt. Using the side of a large knife, slowly mash the garlic into a paste. Put the garlic paste into a small bowl and blend in 1/2 cup olive oil, parsley, and thyme leaves. Pour half the mixture over the chicken and season it with salt and pepper. Set the chicken aside to marinate while you prepare the other ingredients for grilling.Heat the grill to medium high. Drizzle half the remaining marinade into the mushrooms and half onto the cut side of the radicchios. Season both with salt and pepper and place them on the grill over indirect heat. Grill until the mushrooms and radicchio are soft, about 10 to 15 minutes; set them aside to cool while you cook the chicken. Put the chicken on the grill and cook for about 15 to 20 minutes per side, or until cooked through and juices run clear. Set aside until cool enough to handle. To serve, cut the chicken into pieces, cut the mushrooms into quarters, and cut the radicchio into wedges. Gently toss everything together with some fresh watercress and an extra drizzle of olive oil.',
    ingredients: [9, 50, 42, 29],
    amount: [
      '4 cloves garlic, smashed and chopped',
      'Kosher salt and freshly ground black pepper',
      '1/2 cup extra-virgin olive oil, plus more for drizzling',
      '6 sprigs fresh thyme, leaves only',
      '1 (4 to 4 250 grams) chicken, cut in 1/2',
      '4 portobello mushrooms, brushed clean and stems removed',
      '2 small heads radicchio, halved',
      'Watercress, to serve'
    ]
  },
  {
    id: 7,
    image: 'san-francisco-pork-chops',
    name: 'san francisco pork chops',
    timeOfPreparation: 15,
    totalTime: 60,
    servings: 4,
    level: 'intermediate',
    description:
      'Heat 1 tablespoon vegetable oil in a skillet over medium heat. Brown chops in hot oil, about 5 minutes per side; remove pork to a plate, reserving oil in skillet.Cook and stir garlic in reserved drippings until fragrant, about 1 minute. Whisk beef broth, soy sauce, brown sugar, 2 teaspoons vegetable oil, and red pepper flakes in a bowl, dissolving brown sugar. Return pork chops to skillet and pour soy sauce mixture over the chops. Bring sauce to a boil, cover skillet, and reduce heat to low. Simmer chops until tender, 30 to 35 minutes, turning once halfway through cooking.Transfer chops to a serving platter. Whisk cornstarch and water in a small bowl until smooth; stir into pan juices and simmer until thickened, about 5 minutes. Pour sauce over chops to serve.',
    ingredients: [40, 9, 39, 59],
    amount: [
      '1 tablespoon vegetable oil',
      '4 (2 cm-thick) boneless pork chops, trimmed ',
      '1 clove garlic, minced',
      '1/4 cup beef broth',
      '1/4 cup soy sauce',
      '2 tablespoons brown sugar',
      '2 teaspoons vegetable oil',
      '1/4 teaspoon red pepper flakes',
      '2 teaspoons cornstarch',
      '2 tablespoons water'
    ]
  },
  {
    id: 8,
    image: 'skillet-chicken-bulgogi',
    name: 'skillet chicken bulgogi',
    timeOfPreparation: 15,
    totalTime: 30,
    servings: 4,
    level: 'easy',
    description:
      'Whisk onion, soy sauce, brown sugar, garlic, sesame oil, sesame seeds, cayenne pepper, salt, and black pepper together in a bowl until marinade is smooth. Cook and stir chicken and marinade together in a large skillet over medium-high heat until chicken is cooked through, about 15 minutes.dd vegetables if you wish.',
    ingredients: [8, 9, 42, 59, 63],
    amount: [
      '1/4 cup chopped onion',
      '5 tablespoons soy sauce',
      '2 1/2 tablespoons brown sugar',
      '2 tablespoons minced garlic',
      '2 tablespoons sesame oil',
      '1 tablespoon sesame seeds',
      '1/2 teaspoon cayenne salt and ground black pepper to taste',
      '500 grams skinless, boneless chicken breasts, cut into thin strips'
    ]
  },
  {
    id: 9,
    image: 'moroccan-grilled-lamb-chops',
    name: 'moroccan grilled lamb chops',
    timeOfPreparation: 30,
    totalTime: 400,
    servings: 6,
    level: 'easy',
    description:
      'Place the garlic, mint, turmeric, coriander, cumin, lemon zest, and 2 1/2 teaspoons salt in the bowl of a food processor fitted with the steel blade and process until finely ground. Add the olive oil and pulse to combine. Place the chops in one or two non-metal dishes large enough to hold them in one layer. Spread the garlic and herb mixture evenly on both sides. In a small bowl, whisk together the yogurt, Sriracha, and lemon juice, and spread it evenly on the lamb chops. Cover, refrigerate, and allow to marinate for 6 to 24 hours. Prepare a charcoal grill with hot coals and oil the cooking grate. Sprinkle the lamb with salt and grill 13 to 15 cm above the coals, first with the yogurt side up (marinade and all) for 4 to 5 minutes, then turn and grill for 3 to 4 minutes, until medium rare. Transfer to a clean plate, cover the plate tightly with aluminum foil, and allow to rest for 10 minutes. Sprinkle with salt and serve hot with the couscous.',
    ingredients: [9, 16, 30, 13, 47, 41],
    amount: [
      '6 large garlic cloves',
      '1/3 cup julienned fresh mint leaves',
      '1 1/2 tablespoons ground turmeric',
      '1 tablespoon whole coriander seeds',
      '1 tablespoon ground cumin',
      '1 tablespoon grated lemon zest (2 lemons)',
      'Kosher salt',
      '5 tablespoons good olive oil, plus extra for the grill',
      '3 racks of lamb (6 to 7 ribs each), cut into chops',
      '1 1/2 cups plain whole-milk Greek yogurt (12 ounces)',
      '1 1/2 teaspoons Sriracha',
      '3 tablespoons freshly squeezed lemon juice'
    ]
  },
  {
    id: 10,
    image: 'grilled-pork-tenderloin',
    name: 'grilled pork tenderloin',
    timeOfPreparation: 20,
    totalTime: 395,
    servings: 4,
    level: 'easy',
    description:
      'Trim the pork tenderloin of any excess fat and silver skin.Place the lime zest, lime juice, honey, salt, and garlic powder in a small, lidded jar and shake to combine. Pour half of the marinade mixture into a 1-gallon resealable bag, add the chipotle pepper, and move around to combine. Add the pork tenderloin to the bag and seal, removing as much air as possible and place in a container to catch any leaks. Marinate in the refrigerator for 6 to 24 hours, rotating the bag halfway through the time. Place the remaining marinade in a covered container and refrigerate until ready to use.Remove the tenderloin from the bag and allow to sit at room temperature while preparing the grill. Remove the reserved marinade from the refrigerator.Fill a large chimney starter with natural lump charcoal and light. Once the charcoal is ashy and white, approximately 30 minutes, dump the hot charcoal onto the lowest grate of the grill and spread into an even layer using extra-long tongs. Place the cooking grate back on the grill and cover with the lid; heat the grate to medium heat for 2 to 3 minutes.Brush the grill with vegetable oil. Remove the tenderloin from the bag and place in the center of grate. Discard bag with marinade. Cover and cook for 12 to 15 minutes, turning every 1 1/2 to 2 minutes, until the tenderloin reaches an internal temperature of 140 degrees F.Remove the tenderloin from the grill and place on a large piece of heavy-duty aluminum foil folded at the edges to create a basket, and pour on the reserved marinade. Wrap tightly and rest for 10 minutes. Remove to a cutting board and slice. Garnish with cilantro and serve.',
    ingredients: [40, 35, 9, 30],
    amount: [
      '1 whole pork tenderloin, approximately 500 grams',
      '1 lime, zest finely grated',
      '1/2 cup freshly squeezed lime juice',
      '1/4 cup honey',
      '1 1/2 teaspoons kosher salt',
      '1/2 teaspoon garlic powder',
      '1 chipotle chile pepper in adobo sauce',
      '1 teaspoon vegetable oil',
      '1 tablespoon chopped fresh cilantro leaves'
    ]
  },
  {
    id: 11,
    image: 'ightened-up-creamy-broccoli-salad',
    name: 'lightened-up creamy broccoli salad',
    timeOfPreparation: 25,
    totalTime: 95,
    servings: 6,
    level: 'easy',
    description:
      'Combine the ice cubes, onions and 1 cup water in a small bowl. Let the onions soak for 10 minutes while preparing the rest of the salad, then drain and pat dry.Cook the bacon in a small nonstick skillet over medium-low heat until crispy, about 8 minutes. Transfer to a paper-towel-lined plate to drain, reserving 1 teaspoon drippings for the dressing. Finely chop the bacon strips and reserve. Whisk the buttermilk, sour cream, lemon zest and juice, reserved bacon drippings, 3/4 teaspoon salt and pepper to taste in a large bowl. Add the broccoli, onions and golden raisins to the dressing. Toss well, cover and chill for at least 1 hour and up to 4 hours.Before serving, toss well and season with additional salt and pepper. Transfer to a serving dish and top with the chopped bacon and sunflower seeds.',
    ingredients: [22, 37, 47, 4, 53, 54],
    amount: [
      '2 strips low-sodium bacon',
      '1/2 cup ice cubes',
      '1/2 medium red onion, thinly sliced',
      '1/2 cup buttermilk',
      '1/3 cup reduced-fat sour cream',
      '1/4 teaspoon finely grated lemon zest',
      '1 tablespoon fresh lemon juice',
      'Kosher salt and freshly ground black pepper',
      '6 1/2 cups broccoli florets (about 1 500 grams), cut into bite-size pieces',
      '1/3 cup golden raisins',
      '2 tablespoons salted roasted sunflower seeds'
    ]
  },
  {
    id: 12,
    image: 'simple-roasted-pork-shoulder',
    name: 'simple roasted pork shoulder',
    timeOfPreparation: 5,
    totalTime: 295,
    servings: 5,
    level: 'easy',
    description:
      'Preheat the oven to 425 degrees F.In a small bowl, mix together the olive oil, garlic, salt and pepper. Using a pastry brush, spread the mixture all over the pork shoulder.Set the meat on a rack set into a roasting pan. Roast for 20 minutes, and then reduce the heat to 325 degrees F. Continue to cook until an instant-read thermometer inserted into the shoulder reads 185 degrees F, about 4 hours. Remove the pork from the oven and let stand until cool enough to handle, about 30 minutes.',
    ingredients: [50, 9],
    amount: ['3 tablespoons olive oil', '3 tablespoons chopped garlic', '1 (1000 g) pork shoulder']
  },
  {
    id: 13,
    image: 'flat-iron-steak-with-red-wine-sauce',
    name: 'flat iron steak with red wine sauce',
    timeOfPreparation: 15,
    totalTime: 35,
    servings: 6,
    level: 'easy',
    description:
      'Prepare the grill or barbecue (medium-high heat). Sprinkle the steaks with salt and pepper and drizzle with the 3 tablespoons of olive oil. Grill to desired doneness, about 5 minutes per side for medium-rare. Transfer the steaks to a cutting board. Tent with foil and let stand 10 minutes.Meanwhile, melt 2 tablespoons of butter in a heavy large saucepan over medium-high heat. Add the onions and saute until tender, about 5 minutes. Season with salt. Add the garlic and oregano and saute until fragrant, about 30 seconds. Stir in the tomato paste and cook for 2 minutes, stirring constantly. Whisk in the wine. Simmer until the sauce reduces by half, stirring occasionally, about 10 minutes. Remove the skillet from the heat. Strain the sauce into a small bowl, pressing on the solids to extract as much liquid as possible. Discard the solids in the strainer and return the sauce to the saucepan and bring back to a slow simmer. Cut the remaining 4 tablespoons of butter into small 1,5 cm chunks and whisk in the sauce a little at a time. Season the sauce, to taste, with salt and pepper.Thinly slice the steaks across the grain. Divide the steak slices among 6 plates. Drizzle the sauce over the steak, drizzle a little more extra-virgin olive oil and serve.',
    ingredients: [40, 8, 9, 27],
    amount: [
      '2 (500 grams) flat iron steaks or tri-tip steaks',
      'Salt and freshly ground black pepper',
      '3 tablespoons extra-virgin olive oil, plus extra for garnish',
      '6 tablespoons cold unsalted butter',
      '1 onion, thinly sliced',
      '1 tablespoon minced garlic',
      '1 teaspoon dried oregano',
      '1/4 cup tomato paste',
      '2 1/2 cups dry red wine'
    ]
  },
  {
    id: 14,
    image: 'pork-meatballs',
    name: 'pork meatballs',
    timeOfPreparation: 30,
    totalTime: 95,
    servings: 5,
    level: 'easy',
    description:
      'Add the meat to a large bowl, spread it out and season with salt, to taste. Add the remaining ingredients leaving the bread crumbs until last. Mix until all the ingredients are combined. Create a small patty and test it in a small saute pan in 1 tablespoon of oil. When browned on both sides, taste and re-season the meat mixture, if needed. Roll the mixture into about 20 to 25 or so balls that are about 5 cm in diameter.Heat the vegetable oil in a large skillet over high heat. When the oil begins to smoke lightly, shut off the heat to avoid splattering, add the meatballs in a single layer and spread them somewhat apart so they have a chance to brown instead of steam. You may need to do this in batches. Brown the meatballs, over high heat, turning them so they brown all around. Treat them like hamburgers and cook them until they are medium-rare, about 3 to 5 minutes. Touch them to make sure they are still tender in the center. Use a slotted spoon or spatula to remove them from the pan to a tray and cook off the remaining balls, if needed.Add the meatballs to the hot tomato sauce and allow them to bubble slightly and simmer over very low heat for a few minutes. Shut off the heat and allow the mixture to rest for a few additional minutes before serving.',
    ingredients: [40, 38, 37, 46],
    amount: [
      '1000 grams ground pork',
      'Kosher salt',
      '2 teaspoons chili flakes',
      '2 teaspoons fennel seeds',
      '2 eggs',
      '1/2 cup sour cream',
      '2/3 cup tightly packed curly parsley leaves with stems, washed, dried and chopped',
      '1 cup freshly grated Parmesan',
      '1 cup bread crumbs, toasted',
      '1/4 to 1/2 cup vegetable oil, plus 1 tablespoon for testing'
    ]
  },
  {
    id: 15,
    image: 'watermelon-slushies',
    name: 'watermelon slushies',
    timeOfPreparation: 10,
    totalTime: 10,
    servings: 4,
    level: 'easy',
    description:
      "The night before your picnic, puree 6 cups chopped seedless watermelon in a blender until smooth, pour into a shallow airtight container and freeze. Bring the frozen watermelon on your picnic (it'll double as an extra ice pack) and let thaw slightly, then mash with a fork and spoon into cups.",
    ingredients: [55],
    amount: ['6 cups chopped seedless watermelon']
  },
  {
    id: 16,
    image: 'lebanese-chicken-and-potatoes',
    name: 'lebanese chicken and potatoes',
    timeOfPreparation: 15,
    totalTime: 75,
    servings: 6,
    level: 'intermediate',
    description:
      "The night before your picnic, puree 6 cups chopped seedless watermelon in a blender until smooth, pour into a shallow airtight container and freeze. Bring the frozen watermelon on your picnic (it'll double as an extra ice pack) and let thaw slightly, then mash with a fork and spoon into cups.",
    ingredients: [42, 20, 9, 47],
    amount: [
      '8 cut up chicken pieces',
      '8 medium potatoes, peeled and quartered',
      'salt to taste',
      'ground white pepper to taste',
      '4 cloves garlic, crushed',
      '1/2 cup extra virgin olive oil',
      '1 cup fresh lemon juice'
    ]
  },
  {
    id: 17,
    image: 'cajun-seasoning-mix',
    name: 'cajung seasoning mix',
    timeOfPreparation: 5,
    totalTime: 5,
    servings: 4,
    level: 'easy',
    description:
      'In the container of a blender or food processor, combine all the ingredients, and process on high speed until reduced to a fine powder.Transfer to a container with a tight fitting lid and use as desired.',
    ingredients: [9, 8, 17],
    amount: [
      '2 teaspoons white pepper',
      '2 teaspoons garlic powder',
      '2 teaspoons onion powder',
      '2 teaspoons cayenne pepper',
      '2 teaspoons paprika',
      '2 teaspoons ground black pepper'
    ]
  },
  {
    id: 18,
    image: 'creamy-cajun-chicken-pasta',
    name: 'creamy cajun chicken pasta',
    timeOfPreparation: 10,
    totalTime: 25,
    servings: 2,
    level: 'easy',
    description:
      'Place chicken and Cajun seasoning in a bowl and toss to coat.In a large skillet over medium heat, sauté chicken in butter or margarine until chicken is tender, about 5 to 7 minutes.Reduce heat add green onion, heavy cream, tomatoes, basil, salt, garlic powder, black pepper and heat through.Pour over hot linguine and toss with Parmesan cheese.',
    ingredients: [42, 45, 8, 27, 64, 9, 36, 62],
    amount: [
      '2 boneless skinless chicken breast halves, cut into thin strips',
      '120 g linguine, cooked al dente',
      '9.85 ml cajun seasoning (your recipe, Cajun Seasoning Mix or store-bought)',
      '29.58 ml butter',
      '1 thinly sliced green onion',
      '120 ml heavy whipping cream',
      '30 g chopped sun-dried tomatoes',
      '1 g salt',
      '1 g dried basil',
      '1 g ground black pepper',
      '1 g garlic powder',
      '60 g grated parmesan cheese'
    ]
  },
  {
    id: 19,
    image: 'poverty-meal',
    name: 'poverty meal',
    timeOfPreparation: 10,
    totalTime: 25,
    servings: 4,
    level: 'easy',
    description:
      'Saute onions and garlic in olive oil until translucent.Brown ground beef and drain.Add ground beef, tomatoes, water, raw macaroni, salt and pepper to the onion and garlic mixture.Cook for 15 to 20 minutes or until macaroni is tender.If desired, top with Parmesan cheese.Serve with crusty bread and a salad.',
    ingredients: [8, 9, 39, 27, 44, 36, 68],
    amount: [
      '1 large onion, chopped',
      '2 garlic cloves, minced',
      '1 tablespoon olive oil',
      '1 450 ground beef, browned and drained',
      '2 (900 g) cans stewed tomatoes',
      '1 (450 ml) can water',
      '250 ounces elbow macaroni, uncooked',
      'salt, to taste',
      'pepper, to taste',
      'parmesan cheese (optional)'
    ]
  },
  {
    id: 20,
    image: 'tater-tots-casserole',
    name: 'tater tots casserole',
    timeOfPreparation: 15,
    totalTime: 55,
    servings: 4,
    level: 'intermediate',
    description:
      'reheat oven to 350 degrees.Brown ground beef. Saute onion.In a casserole dish, combine ground beef, sauteed onion, cream of celery soup. Top mixture with tater tots. Sprinkle shredded cheddar cheese over top of tater tots.Bake in oven for 30-40 minutes.',
    ingredients: [39, 8, 66, 20, 72],
    amount: [
      '450 g lean ground beef',
      '1 medium onion, chopped',
      '300 g can condensed cream of celery soup',
      'frozen tater tots',
      '250 g shredded cheddar cheese'
    ]
  },
  {
    id: 21,
    image: 'fast fiesta mexican ravioli',
    name: 'fast fiesta mexican ravioli',
    timeOfPreparation: 5,
    totalTime: 20,
    servings: 6,
    level: 'easy',
    description:
      'Cook ravioli per package instructions.In large skillet, combine enchilada sauce and salsa.Stir and cook until heated through.Drain ravioli and add to enchilada sauce/salsa mixture.Stir to coat.Top with cheese and olives.Cover and cook for 3-4 minutes over low heat until cheese is melted.',
    ingredients: [61, 39, 36, 31],
    amount: [
      '700 g packagefrozen beef ravioli (approx 6C cooked ravioli or 50-55 ravioli)',
      '300 g can enchilada sauce',
      '250 g jar salsa',
      '250 g shredded monterey jack cheese',
      '60 g cansliced olives, drained (optional)'
    ]
  },
  {
    id: 22,
    image: 'slow-and-easy-beef-stew',
    name: 'slow and easy beef stew',
    timeOfPreparation: 15,
    totalTime: 320,
    servings: 12,
    level: 'easy',
    description:
      'Layer in large casserole or Dutch oven in order given.Cover and bake for 5 hours at 275 degrees fahrenheit. Note: This can also be cooked in a crock pot on high.',
    ingredients: [39, 25, 8, 20, 72],
    amount: [
      '1000 g stewing beef',
      '4 carrots, cut up',
      '2 onions, cut up',
      '4 potatoes, cut up',
      '300 g can cream of mushroom soup, diluted with below',
      '120 ml water'
    ]
  },
  {
    id: 23,
    image: 'meatless-italian-macaroni-bake',
    name: 'meatless italian macaroni bake',
    timeOfPreparation: 10,
    totalTime: 25,
    servings: 4,
    level: 'intermediate',
    description:
      'Preheat oven to 180°C.In a large mixing bowl combine the cooked marcaroni, stewed tomatoes, 1/2 cup of the mozzarella, italian seasoning and mayonnaise. Spoon the mixture into a 1 1/2 quart casserole dish; Sprinkle with the remaining 1/4 cup mozzarella cheese .Bake in the preheated 180°C oven for approximately 20 min (your time may vary) until warm and all cheese is melted. Do NOT substitute anything else for the mayonnaise, i.e. NO salad dressing, NO Miracle Whip, as the recipe is specifically tailored to the result that is created by the use of mayonnaise .Variation: Use a different pasta such as rotini or penne rigati.',
    ingredients: [44, 27, 73, 59],
    amount: [
      '500 g elbow macaroni, cooked & drained (Ronzoni Whole Wheat pasta)',
      '450 g stewed tomatoes (no salt added if available)',
      '180 f part-skim mozzarella cheese, shredded',
      '120 g reduced-fat mayonnaise (NOT Miracle Whip)'
    ]
  },
  {
    id: 24,
    image: 'smoked-sausage-taters-peppers-and-onions-country-style',
    name: 'smoked sausage, taters, peppers and onions country style',
    timeOfPreparation: 10,
    totalTime: 50,
    servings: 4,
    level: 'easy',
    description:
      'Combine smoked sausage, potatoes, onion, bell pepper and water in a large pot.Cover and simmer over medium heat 15 to 25 minutes, stirring occasionally, until potatoes are soft.',
    ingredients: [74, 20, 8],
    amount: [
      '450 g smoked sausage, sliced into 1,3 cm pieces',
      '4 medium potatoes (peeled and cubed)',
      '1 small onion (chopped)',
      '1 bell pepper (chopped)',
      '60 ml water'
    ]
  },
  {
    id: 25,
    image: 'zesty-one-pan-chicken-and-potato-bake',
    name: 'zesty one pan chicken and potato bake',
    timeOfPreparation: 15,
    totalTime: 65,
    servings: 4,
    level: 'intermediate',
    description:
      'reheat oven to 350 degrees.Brown ground beef. Saute onion.In a casserole dish, combine ground beef, sauteed onion, cream of celery soup. Top mixture with tater tots. Sprinkle shredded cheddar cheese over top of tater tots.Bake in oven for 30-40 minutes.',
    ingredients: [42, 20, 25, 62, 76],
    amount: [
      '900 g boneless skinless chicken thighs',
      '4 potatoes',
      '480 g baby carrots',
      '120 ml Kraft light zesty italian dressing',
      '60 g parmesan cheese'
    ]
  },
  {
    id: 26,
    image: "jo-mama's-world-famous-spaghetti",
    name: "jo mama's world famous spaghetti",
    timeOfPreparation: 15,
    totalTime: 90,
    servings: 12,
    level: 'easy',
    description:
      'In large, heavy stockpot, brown Italian sausage, breaking up as you stir. Add onions and continue to cook, stirring occasionally until onions are softened. Add garlic, tomatoes, tomato paste, tomato sauce and water. Add basil, parsley, brown sugar, salt, crushed red pepper, and black pepper. Stir well and barely bring to a boil. Stir in red wine. Simmer on low, stirring frequently for at least an hour. A longer simmer makes for a better sauce, just be careful not to let it burn! Cook spaghetti according to package directions.Spoon sauce over drained spaghetti noodles and sprinkle with parmesan cheese.',
    ingredients: [65, 8, 9, 27, 64, 46, 45],
    amount: [
      '900 g Italian sausage, casings removed (mild or hot)',
      '1 small onion, chopped (optional)',
      '3-4garlic cloves, minced',
      '800 g can diced tomatoes',
      '850 g can tomato sauce',
      "470 ml water (for a long period of simmering for flavors to meld. If you don't want to simmer it as long, add less)",
      '15 g basil',
      '10 g dried parsley flakes',
      '8 g brown sugar',
      '5 g salt',
      '3 g crushed red pepper flakes',
      '1.5 g fresh coarse ground black pepper',
      '60 ml red wine (a good Cabarnet)',
      '450-500 g thin spaghetti'
    ]
  },
  {
    id: 27,
    image: 'tuna-caserole',
    name: 'tuna caserole',
    timeOfPreparation: 15,
    totalTime: 45,
    servings: 4,
    level: 'easy',
    description:
      'Cook egg noodles to al dente in boiling salted water; drain well. Preheat oven to 325°F. Mix all ingredients together in a large casserole dish, reserving 1/2 cup of cheese. Sprinkle reserved cheese over the top. Bake for 30 minutes. Serve hot.',
    ingredients: [71, 66, 58, 59, 77, 6, 8, 78],
    amount: [
      '230 g noodles',
      '300 g can cream of celery soup',
      '120 ml mayonnaise',
      '250 g grated cheddar cheese, divided',
      '120 g finely chopped celery',
      '1 small onion, finely chopped',
      '120 g mushrooms, drained (optional)',
      '5 g black pepper',
      '200 g can tuna, with juice'
    ]
  }
];

var objs = [];

for (let obj of recepies) {
  try {
    objs.push(new Recipe.Recipe(obj));
  } catch (error) {
    console.log(error);
    console.log(obj.id);
  }
}
console.log(objs[4].getObjectRepresentation());
