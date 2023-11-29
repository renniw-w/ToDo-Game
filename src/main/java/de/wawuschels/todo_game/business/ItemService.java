package de.wawuschels.todo_game.business;

import de.wawuschels.todo_game.business.model.Item;
import de.wawuschels.todo_game.domain.ItemRepository;
import de.wawuschels.todo_game.domain.model.ItemEntity;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor()
public class ItemService {

    private final ItemRepository itemRepository;

    public List<Item> findAll() {
        return itemRepository.findAll().stream().map(this::toItem).collect(Collectors.toList());
    }

    public Item findById(Long id) {
        return toItem(itemRepository.getReferenceById(id));
    }

    public void addOrEditItem(Item item) {
        ItemEntity itemEntity = toItemEntity(item);
        itemRepository.save(itemEntity);
    }

    private Item toItem(ItemEntity itemEntity) {
        return new Item(itemEntity.getId(), itemEntity.getName(), itemEntity.getDescription(), itemEntity.getScore());
    }

    private ItemEntity toItemEntity(Item item) {
        ItemEntity itemEntity;
        if (item.getId() == null) {
            itemEntity = new ItemEntity();
        } else {
            Optional<ItemEntity> itemEntityOptional = itemRepository.findById(item.getId());
            itemEntity = itemEntityOptional.orElseThrow(NoSuchElementException::new);
        }
        itemEntity.setDescription(item.getDescription());
        itemEntity.setName(item.getName());
        itemEntity.setScore(item.getScore());
        return itemEntity;
    }

    public void deleteById(Long id) {
        itemRepository.deleteById(id);
    }
}
