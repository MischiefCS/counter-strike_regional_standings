### Roster Details<br />
Team Name: Prototype Blaze<br />
Roster: ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL<br />
Global Rank: [74](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [52]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  799.2<br />
<br />
Final Rank Value (799.2) = Starting Rank Value (806.2) + Head To Head Adjustments (-7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.135[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.2
- 400 + ( ( 0.196 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 806.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      598 | 2025-02-02 | Permitta W                   | W   | 0.771      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.22 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            6 |      610 | 2025-02-01 | Eco Warriors                 | L   | 0.765      | -            | -                | -                | -         |   -13.32 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            5 |     1479 | 2024-11-14 | Team Poland (Female team)    | L   | 0.238      | -            | -                | -                | -         |    -3.22 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            4 |     1499 | 2024-11-14 | Team Portugal (Female team)  | W   | 0.236      | 0.557        | 0.021 (0.003)    | 0.055 (0.007)    | 1 (0.236) |     3.43 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            3 |     1523 | 2024-11-13 | Team Denmark (Female team)   | W   | 0.229      | 0.557        | 0.006 (0.001)    | 0.036 (0.005)    | 1 (0.229) |     1.68 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            2 |     1567 | 2024-11-11 | Team Sweden (Female team)    | W   | 0.218      | 0.557        | 0.005 (0.001)    | 0.018 (0.002)    | 1 (0.218) |     1.60 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            1 |     1572 | 2024-11-11 | Team Argentina (Female team) | W   | 0.217      | 0.557        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.217) |     0.64 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,525.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.238 | $40,000.00     | $9,525.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
