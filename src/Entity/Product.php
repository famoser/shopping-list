<?php

/*
 * This file is part of the shopping-list project.
 * (c) Florian Moser <git@famoser.ch>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Entity\Base\BaseEntity;
use App\Entity\Traits\IdTrait;
use App\Entity\Traits\TimeTrait;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity()
 *
 * @ORM\HasLifecycleCallbacks
 *
 * @ApiResource(
 *     normalizationContext={"groups"={"product"}},
 *     denormalizationContext={"groups"={"product"}}),
 * )
 */
class Product extends BaseEntity
{
    use IdTrait;
    use TimeTrait;

    public const CATEGORY_FRUIT_VEGETABLES = 1;
    public const CATEGORY_DAIRY_PRODUCTS_EGGS = 2;
    public const CATEGORY_BREAD_BACKED_GOODS = 3;
    public const CATEGORY_INVENTORIES = 4;
    public const CATEGORY_FROZEN_FOOD_READY_MADE_MEALS = 5;
    public const CATEGORY_DRINKS = 6;
    public const CATEGORY_HOUSEHOLD = 7;
    public const CATEGORY_MEAT_FISH = 8;
    public const CATEGORY_SNACKS = 9;

    /**
     * @var string
     *
     * @Assert\NotBlank
     *
     * @Groups("product")
     *
     * @ORM\Column(type="text")
     */
    private $name;

    /**
     * @var int
     *
     * @Assert\Range(min=1, max=9)
     *
     * @Groups("product")
     *
     * @ORM\Column(type="integer")
     */
    private $category;

    /**
     * @var bool
     *
     * @Assert\NotNull()
     *
     * @Groups("product")
     *
     * @ORM\Column(type="boolean")
     */
    private $active;

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getCategory(): int
    {
        return $this->category;
    }

    public function setCategory(int $category): void
    {
        $this->category = $category;
    }

    public function isActive(): bool
    {
        return $this->active;
    }

    public function setActive(bool $active): void
    {
        $this->active = $active;
    }
}
