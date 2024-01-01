<template>
  <div class="item__info-right">
    <span class="analog" />
    <span class="compare" />
    <span class="like" />
    <span class="share" />
  </div>
</template>
<style scoped>
.item__info-right {
  display: flex;
  gap: 16px;
  span {
    width: 24px;
    height: 24px;
    background-size: contain;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    justify-content: center;
    margin-bottom: 20px;
    gap: 32px;
  }
  .analog {
    background-image: url("/searchResult/analog.svg");
  }
  .compare {
    background-image: url("/searchResult/compare.svg");
  }
  .like {
    background-image: url("/searchResult/like.svg");
    &::after {
      content: "";
      display: block;
      background-image: url("/searchResult/likeActive.svg");
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    &.active {
      &::after {
        opacity: 1;
      }
    }
  }
  .share {
    background-image: url("/searchResult/share.svg");
    margin-left: 8px;
  }
}
</style>
