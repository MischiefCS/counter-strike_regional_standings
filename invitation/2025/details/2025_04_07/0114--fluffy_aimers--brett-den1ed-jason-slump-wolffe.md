### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [114](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [24]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  704.7<br />
<br />
Final Rank Value (704.7) = Starting Rank Value (714.3) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 714.3
- 400 + ( ( 0.152 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 714.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      863 | 2024-12-14 | Party Astronauts   | L   | 0.440      | -            | -                | -                | -         |    -7.72 | brett, den1ed, jason, slump, Wolffe |
|           11 |      961 | 2024-12-08 | BOSS               | L   | 0.398      | -            | -                | -                | -         |    -4.59 | brett, jason, nooz, slump, Wolffe   |
|           10 |      974 | 2024-12-07 | Party Astronauts   | W   | 0.394      | 0.384        | 0.002 (0.000)    | 0.339 (0.051)    | 1 (0.394) |     5.51 | brett, jason, nooz, slump, Wolffe   |
|            9 |      978 | 2024-12-07 | Bad News Capybaras | W   | 0.393      | 0.384        | 0.000 (0.000)    | 0.101 (0.015)    | 1 (0.393) |     4.97 | brett, jason, nooz, slump, Wolffe   |
|            8 |      986 | 2024-12-07 | What's for Dinner  | W   | 0.392      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.392) |     1.88 | brett, jason, nooz, slump, Wolffe   |
|            7 |     1000 | 2024-12-06 | ROOMBA PEEK        | L   | 0.388      | -            | -                | -                | -         |    -9.12 | brett, jason, nooz, slump, Wolffe   |
|            6 |     1951 | 2024-10-15 | BOSS               | L   | 0.040      | -            | -                | -                | -         |    -0.45 | ayy, brett, jason, nooz, slump      |
|            5 |     1968 | 2024-10-13 | Fisher College     | L   | 0.026      | -            | -                | -                | -         |    -0.47 | brett, jason, nooz, slump, Wolffe   |
|            4 |     1969 | 2024-10-13 | InControl          | W   | 0.025      | 0.262        | 0.000 (0.000)    | 0.066 (0.000)    | 0 (0.000) |     0.26 | brett, jason, nooz, slump, Wolffe   |
|            3 |     1976 | 2024-10-12 | Final Form         | W   | 0.020      | 0.262        | 0.000 (0.000)    | 0.029 (0.000)    | 0 (0.000) |     0.14 | brett, jason, nooz, slump, Wolffe   |
|            2 |     2009 | 2024-10-09 | Chill Guys         | L   | 0.000      | -            | -                | -                | -         |    -0.01 | ayy, brett, jason, nooz, slump      |
|            1 |     2015 | 2024-10-09 | Chill Guys         | L   | 0.000      | -            | -                | -                | -         |     0.00 | ayy, brett, jason, nooz, slump      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($157.27)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $2,000.00      | $145.56         |
| 2024-10-13 |      0.026 | $450.00        | $11.72          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
