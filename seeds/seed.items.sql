BEGIN;

TRUNCATE
  users,
  items
  RESTART IDENTITY CASCADE;

INSERT INTO users (username, password)
VALUES
  ('mightmagz', '$2a$12$ihLGaVYHZv1KegomKxdB6e3tBZBE.J1IgbF/Es9EjKvsnTrKOk3kW');

  INSERT INTO items (item_name, ingredient_one, ingredient_two, ingredient_three, ingredient_four, ingredient_five, ingredient_six, sell_price, item_type, tag_one, tag_two, tag_three)
  VALUES
    ('Iron nugget', '', '', '', '', '', '', 375, 'rock', '', '', ''),
    ('Net', '1 flimsy net', '1 iron nugget', '', '', '', '', 600, 'tool', '', '', ''),
    ('Plain sink', '6 wood', '4 clay', '1 iron nugget', '', '', '', 2270, 'craft', 'indoor decor', 'furniture', ''),
    ('Wooden fish', '3 wood', '', '', '', '', '', 360, 'craft', 'instrument', '', '');


  COMMIT;