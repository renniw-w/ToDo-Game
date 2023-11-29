package de.wawuschels.todo_game.domain.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PlayerWorkItem {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @OneToOne
    private WorkItem workItem;

    @OneToOne
    private Player player;

}
