### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: delle, dex, HEAP, JW, poiii<br />
Global Rank: [47](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [31]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  662.8<br />
<br />
Final Rank Value (662.8) = Starting Rank Value (676.7) + Head To Head Adjustments (-13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.7
- 400 + ( ( 0.112 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 676.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      117 | 2025-02-22 | Aurora Gaming         | L   | 0.296      | -            | -                | -                | -         |    -6.67 | delle, dex, HEAP, JW, poiii |
|            5 |      149 | 2025-02-21 | BC.Game Esports       | L   | 0.289      | -            | -                | -                | -         |    -1.69 | delle, dex, HEAP, JW, poiii |
|            4 |      262 | 2025-02-14 | THE GENTLEMEN ESPORTS | L   | 0.246      | -            | -                | -                | -         |    -5.62 | delle, dex, HEAP, JW, poiii |
|            3 |      697 | 2025-01-11 | 9Pandas               | L   | 0.017      | -            | -                | -                | -         |    -0.18 | delle, dex, HEAP, JW, poiii |
|            2 |      702 | 2025-01-10 | Natus Vincere Junior  | W   | 0.011      | 0.417        | 0.031 (0.000)    | 0.525 (0.002)    | 0 (0.000) |     0.24 | delle, dex, HEAP, JW, poiii |
|            1 |      708 | 2025-01-09 | 9INE                  | W   | 0.005      | 0.417        | 0.000 (0.000)    | 0.627 (0.001)    | 0 (0.000) |     0.05 | delle, dex, HEAP, JW, poiii |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($119.44)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      0.024 | $5,000.00      | $119.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
