### Roster Details<br />
Team Name: MCS Gaming<br />
Roster: Goodbye, Oczarka, ogura, Scorchyy, snufaffu<br />
Global Rank: [239](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [74]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  576.1<br />
<br />
Final Rank Value (576.1) = Starting Rank Value (613.4) + Head To Head Adjustments (-37.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 613.4
- 400 + ( ( 0.112 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 613.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      354 | 2025-02-10 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |   -15.92 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            5 |      394 | 2025-02-09 | Bad News Capybaras   | W   | 1.000      | 0.233        | 0.001 (0.000)    | 0.148 (0.034)    | 0 (0.000) |    18.06 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            4 |      435 | 2025-02-08 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |   -18.24 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            3 |     1032 | 2024-12-05 | Bad Boys             | L   | 0.629      | -            | -                | -                | -         |    -8.36 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            2 |     1103 | 2024-12-02 | Chicken Coop Esports | L   | 0.609      | -            | -                | -                | -         |    -8.49 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            1 |     1853 | 2024-10-19 | Timbermen            | L   | 0.316      | -            | -                | -                | -         |    -4.35 | GibbyATL, Goodbye, ogura, Scorchyy, snufaffu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($811.28)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.649 | $1,250.00      | $811.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
