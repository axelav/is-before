'use strict'

module.exports = function isBefore (date, beforeDate) {
  return date.getTime() < beforeDate.getTime()
}
