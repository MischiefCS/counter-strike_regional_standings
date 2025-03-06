### Roster Details<br />
Team Name: Prototype Blaze<br />
Roster: ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL<br />
Global Rank: [101](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [71]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  707.8<br />
<br />
Final Rank Value (707.8) = Starting Rank Value (712.9) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.9
- 400 + ( ( 0.144 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 712.9


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
|            7 |      598 | 2025-02-02 | Permitta W                   | W   | 0.585      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.69 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            6 |      610 | 2025-02-01 | Eco Warriors                 | L   | 0.578      | -            | -                | -                | -         |    -8.56 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            5 |     1479 | 2024-11-14 | Team Poland (Female team)    | L   | 0.051      | -            | -                | -                | -         |    -0.74 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            4 |     1499 | 2024-11-14 | Team Portugal (Female team)  | W   | 0.049      | 0.557        | 0.008 (0.000)    | 0.014 (0.000)    | 1 (0.049) |     0.73 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            3 |     1523 | 2024-11-13 | Team Denmark (Female team)   | W   | 0.043      | 0.557        | 0.002 (0.000)    | 0.008 (0.000)    | 1 (0.043) |     0.39 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            2 |     1567 | 2024-11-11 | Team Sweden (Female team)    | W   | 0.031      | 0.557        | 0.002 (0.000)    | 0.004 (0.000)    | 1 (0.031) |     0.29 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            1 |     1572 | 2024-11-11 | Team Argentina (Female team) | W   | 0.030      | 0.557        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.030) |     0.14 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,058.33)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.051 | $40,000.00     | $2,058.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
